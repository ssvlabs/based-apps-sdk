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

export const getBasedAppsAPI = (apis: APIs) => {
  return {
    getValidatorsBalance: getValidatorsBalance.bind(null, apis),
    getBappSlashableBalance: getBappSlashableBalance.bind(null, apis),
  }
}
