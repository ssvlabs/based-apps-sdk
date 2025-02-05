import type { APIs } from '@/api'
import { chunk } from 'lodash-es'
import type { Address } from 'viem'
import { formatGwei } from 'viem'

export const getValidatorsBalance = async (
  apis: APIs,
  args: Parameters<APIs['dvt']['getValidatorsByAccount']>[0],
) => {
  const validators = await apis.dvt.getValidatorsByAccount(args)
  const chunks = chunk(validators, 50)

  const promises = chunks.map((chunk) =>
    apis.beacon.getValidatorBalances({
      stateId: 'head',
      validatorIds: chunk,
    }),
  )

  const results = await Promise.all(promises)
  const data = results.flatMap((v) => v.data)

  const totalBalance = formatGwei(
    data.reduce((acc, v) => {
      return acc + BigInt(v.balance)
    }, 0n),
  )

  return {
    account: args.account,
    validators,
    balance: totalBalance,
  }
}

export const getBappSlashableBalance = async (apis: APIs, args: { bAppId: Address }) => {
  const bAppOptIns = await apis.bam.getStrategyBAppOptIns(args)

  const slashableBalances = bAppOptIns.reduce<Map<Address, bigint>>((acc, optIn) => {
    const balances = new Map(
      optIn.strategy.balances.map(({ token, balance }) => [token, BigInt(balance)]),
    )

    optIn.obligations.forEach(({ token, percentage }) => {
      const balance = balances.get(token) ?? 0n
      const slashableBalance = (balance * BigInt(percentage)) / 10000n
      const currentBalance = acc.get(token) ?? 0n
      acc.set(token, currentBalance + slashableBalance)
    })

    return acc
  }, new Map())

  return Array.from(slashableBalances.entries()).map(([token, balance]) => ({
    token,
    balance,
  }))
}

export interface ParticipantWeight {
  strategyId: string
  token: Address
  weight: number
  finalWeight?: number // Optional final combined weight
}

export const calculateParticipantWeights = async (
  apis: APIs,
  args: { bAppId: Address },
): Promise<ParticipantWeight[]> => {
  const bAppData = await apis.bam.getParticipantWeightInput(args)
  if (!bAppData) {
    throw new Error('bApp not found')
  }

  const weights: ParticipantWeight[] = []
  const riskByTokenAndStrategy = new Map<string, Map<string, number>>()

  // First pass: Calculate risks for each token and strategy
  for (const strategyData of bAppData.strategies) {
    const strategy = strategyData.strategy as {
      id: string
      balances: { token: Address; riskValue: string }[]
      owner: { id: Address; delegators: { percentage: string; id: string }[] }
    }
    const strategyId = strategy.id

    // Sum all percentages for each token
    const tokenRisks = new Map<string, number>()
    for (const obligation of strategyData.obligations as { token: Address; obligatedBalance: string; percentage: string }[]) {
      const token = obligation.token.toLowerCase()
      const currentRisk = tokenRisks.get(token) ?? 0
      tokenRisks.set(token, currentRisk + Number(obligation.percentage) / 10000) // Divide by 100 to get risk
    }

    // Store risks for each token and strategy
    for (const [token, risk] of tokenRisks) {
      if (!riskByTokenAndStrategy.has(token)) {
        riskByTokenAndStrategy.set(token, new Map())
      }
      riskByTokenAndStrategy.get(token)!.set(strategyId, risk)
    }
  }

  // Process each token in the bApp
  for (const bAppToken of bAppData.bAppTokens) {
    const token = bAppToken.token as Address
    const tokenLower = token.toLowerCase()
    const beta = Number(bAppToken.sharedRiskLevel) / 10000 // Normalize beta to 0-1 range
    const totalObligatedBalance = BigInt(bAppToken.totalObligatedBalance)

    if (totalObligatedBalance === 0n) continue

    // Calculate normalization constant c_token
    let normalizationDenominator = 0
    const strategyWeights: { strategyId: string; weight: number }[] = []

    // Calculate the denominator sum for c_token
    for (const strategyData of bAppData.strategies) {
      const strategy = strategyData.strategy
      const strategyId = strategy.id

      const obligation = strategyData.obligations.find(
        (ob) => ob.token.toLowerCase() === tokenLower,
      )
      if (!obligation) continue

      // Check if we have balance info for this token
      const balance = strategy.balances.find(
        (bal) => bal.token.toLowerCase() === tokenLower,
      )
      if (!balance) continue

      const obligatedBalance = BigInt(obligation.obligatedBalance)
      const risk = Math.max(1, riskByTokenAndStrategy.get(tokenLower)?.get(strategyId) ?? 0)

      // Calculate e^(-β × max(1,Risk))
      const exponentialTerm = Math.exp(-beta * risk)
      
      // Add to denominator: ObligatedBalance/TotalBAppBalance * e^(-β × max(1,Risk))
      const term = Number(obligatedBalance) / Number(totalObligatedBalance) * exponentialTerm
      normalizationDenominator += term

      strategyWeights.push({
        strategyId,
        weight: term,
      })
    }

    // If no valid strategies found, skip this token
    if (strategyWeights.length === 0) continue

    // Calculate c_token as the inverse of the sum
    const cToken = normalizationDenominator === 0 ? 0 : 1 / normalizationDenominator

    // Calculate final weights using c_token
    for (const { strategyId, weight } of strategyWeights) {
      weights.push({
        strategyId,
        token,
        weight: weight * cToken,
      })
    }
  }

  // Handle validator balances if present
  for (const strategyData of bAppData.strategies) {
    const strategy = strategyData.strategy as {
      id: string
      balances: { token: Address; riskValue: string }[]
      owner: { id: Address; delegators: { percentage: string; id: string }[] }
    }
    if (!strategy.owner.delegators.length) continue

    let totalDelegatedBalance = 0
    for (const delegator of strategy.owner.delegators) {
      totalDelegatedBalance += Number(delegator.percentage) / 10000
    }

    if (totalDelegatedBalance > 0) {
      // Get validator balance from beacon chain
      const validatorBalance = await apis.dvt.getValidatorsByAccount({
        account: strategy.owner.id,
      }).then(async (validators) => {
        if (!validators.length) return '0'
        const balances = await apis.beacon.getValidatorBalances({
          stateId: 'head',
          validatorIds: validators,
        })
        return formatGwei(
          balances.data.reduce((acc, v) => acc + BigInt(v.balance), 0n),
        )
      })

      // Calculate validator balance weight (no risk involved)
      const effectiveBalance = (BigInt(validatorBalance) * BigInt(Math.floor(totalDelegatedBalance * 10000))) / 10000n
      
      weights.push({
        strategyId: strategy.id,
        token: '0x0000000000000000000000000000000000000000' as Address, // Special token for validator balance
        weight: Number(effectiveBalance),
      })
    }
  }

  // Optional: Calculate final combined weights using weighted harmonic mean
  // This is an example using equal weights for all tokens
  const strategyIds = new Set(weights.map(w => w.strategyId))
  const tokenWeights = new Map<string, number>() // Equal weights for all tokens
  bAppData.bAppTokens.forEach(token => {
    tokenWeights.set(token.token.toLowerCase(), 1)
  })

  for (const strategyId of strategyIds) {
    const strategyWeights = weights.filter(w => w.strategyId === strategyId)
    if (strategyWeights.length === 0) continue

    // Calculate harmonic mean denominator
    let denominator = 0
    let totalWeight = 0
    for (const w of strategyWeights) {
      const tokenWeight = tokenWeights.get(w.token.toLowerCase()) ?? 0
      if (tokenWeight > 0 && w.weight > 0) {
        denominator += tokenWeight / w.weight
        totalWeight += tokenWeight
      }
    }

    // Calculate final weight
    const finalWeight = totalWeight / denominator
    strategyWeights.forEach(w => {
      w.finalWeight = finalWeight
    })
  }

  return weights
}

export const getBasedAppsAPI = (apis: APIs) => {
  return {
    getValidatorsBalance: getValidatorsBalance.bind(null, apis),
    getBappSlashableBalance: getBappSlashableBalance.bind(null, apis),
    calculateParticipantWeights: calculateParticipantWeights.bind(null, apis),
  }
}
