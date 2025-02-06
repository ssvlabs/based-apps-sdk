import type { APIs } from '@/api'
import { chunk } from 'lodash-es'
import type { Address } from 'viem'
import { formatGwei } from 'viem'

export const getValidatorsBalance = async (
  apis: APIs,
  args: Parameters<APIs['dvt']['getValidatorsByAccount']>[0],
) => {
  const validators = await apis.dvt.getValidatorsByAccount(args)
  console.log('validators:', validators)

  if (!validators.length)
    return {
      account: args.account,
      validators: [],
      balance: '0',
    }

  const chunks = chunk(validators, 500)

  const results = await Promise.all(
    chunks.map((chunk) =>
      apis.beacon.getValidatorBalances({
        stateId: 'head',
        validatorIds: chunk,
      }),
    ),
  )

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

export interface TokenWeight {
  token: Address
  weight: number
}

export interface StrategyWeight {
  id: string
  tokenWeights: TokenWeight[]
  validatorBalanceWeight?: number
}

export const calculateParticipantWeights = async (
  apis: APIs,
  args: { bAppId: Address },
): Promise<StrategyWeight[]> => {
  const bAppData = await apis.bam.getParticipantWeightInput(args)
  if (!bAppData) {
    throw new Error('bApp not found')
  }

  // Initialize strategy weights map
  const strategyWeightsMap = new Map<string, StrategyWeight>()
  const riskByTokenAndStrategy = new Map<string, Map<string, number>>()

  // First pass: Calculate risks for each token and strategy
  for (const strategyData of bAppData.strategies) {
    const strategy = strategyData.strategy

    // Initialize strategy weight object
    strategyWeightsMap.set(strategy.id, {
      id: strategy.id,
      tokenWeights: [],
    })

    // Sum all percentages for each token
    const tokenRisks = new Map<string, number>()
    for (const obligation of strategyData.obligations) {
      const token = obligation.token.toLowerCase()
      const currentRisk = tokenRisks.get(token) ?? 0
      tokenRisks.set(token, currentRisk + Number(obligation.percentage) / 10000) // Divide by 100 to get risk
    }

    // Store risks for each token and strategy
    for (const [token, risk] of tokenRisks) {
      if (!riskByTokenAndStrategy.has(token)) {
        riskByTokenAndStrategy.set(token, new Map())
      }
      riskByTokenAndStrategy.get(token)!.set(strategy.id, risk)
    }
  }

  // Process each token in the bApp
  for (const bAppToken of bAppData.bAppTokens) {
    const token = bAppToken.token
    const tokenLower = token.toLowerCase()
    const beta = Number(bAppToken.sharedRiskLevel) / 10000
    const totalObligatedBalance = BigInt(bAppToken.totalObligatedBalance)

    if (totalObligatedBalance === 0n) continue

    // Calculate normalization constant c_token
    let normalizationDenominator = 0
    const tempWeights: { strategyId: string; weight: number }[] = []

    // Calculate the denominator sum for c_token
    for (const strategyData of bAppData.strategies) {
      const strategy = strategyData.strategy
      const strategyId = strategy.id

      const obligation = strategyData.obligations.find(
        (ob) => ob.token.toLowerCase() === tokenLower,
      )
      if (!obligation) continue

      // Check if we have balance info for this token
      const balance = strategy.balances.find((bal) => bal.token.toLowerCase() === tokenLower)
      if (!balance) continue

      const obligatedBalance = BigInt(obligation.obligatedBalance)
      const risk = Math.max(1, riskByTokenAndStrategy.get(tokenLower)?.get(strategyId) ?? 0)

      const exponentialTerm = Math.exp(-beta * risk)
      const term = (Number(obligatedBalance) / Number(totalObligatedBalance)) * exponentialTerm
      normalizationDenominator += term

      tempWeights.push({
        strategyId,
        weight: term,
      })
    }

    // Calculate c_token as the inverse of the sum
    const cToken = normalizationDenominator === 0 ? 0 : 1 / normalizationDenominator

    // Calculate final weights using c_token
    for (const { strategyId, weight } of tempWeights) {
      const strategyWeight = strategyWeightsMap.get(strategyId)
      if (strategyWeight) {
        strategyWeight.tokenWeights.push({
          token,
          weight: weight * cToken,
        })
      }
    }
  }

  const delegatedBalances = new Map<string, number>()
  let totalBAppBalance = 0

  // Handle validator balances if present
  for (const strategyData of bAppData.strategies) {
    const strategy = strategyData.strategy
    if (!strategy.owner.delegators.length) continue

    const balances = await Promise.all(
      strategy.owner.delegators
        .filter((d) => Number(d.percentage) > 0)
        .map(async (delegator) => {
          const response = await getValidatorsBalance(apis, {
            account: delegator.delegator.id,
          })
          console.log(`balance for delegator:${delegator.delegator.id}`, response)
          return {
            delegated: (Number(response.balance) * Number(delegator.percentage)) / 10000,
          }
        }),
    )

    const delegatedBalance = balances.reduce((acc, balance) => acc + balance.delegated, 0)
    delegatedBalances.set(strategy.id, delegatedBalance)

    totalBAppBalance += delegatedBalance
  }

  for (const [strategyId, delegatedBalance] of delegatedBalances.entries()) {
    const strategyWeight = strategyWeightsMap.get(strategyId)
    if (strategyWeight) {
      strategyWeight.validatorBalanceWeight = Number(delegatedBalance) / Number(totalBAppBalance)
    }
  }
  return Array.from(strategyWeightsMap.values())
}

export const getBasedAppsAPI = (apis: APIs) => {
  return {
    getValidatorsBalance: getValidatorsBalance.bind(null, apis),
    getBappSlashableBalance: getBappSlashableBalance.bind(null, apis),
    calculateParticipantWeights: calculateParticipantWeights.bind(null, apis),
  }
}
