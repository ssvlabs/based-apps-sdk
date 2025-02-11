import type { Address } from 'abitype'

export interface TokenWeight {
  token: Address
  weight: number
}

export interface StrategyWeight {
  id: string
  tokenWeights: TokenWeight[]
  validatorBalanceWeight?: number
}
