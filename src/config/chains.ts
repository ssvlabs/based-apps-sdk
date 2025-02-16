import { holesky, mainnet } from 'viem/chains'
export const chains = {
  mainnet,
  holesky,
} as const

export const networks = Object.values(chains).map((chain) => chain.name)
export type Network = (typeof networks)[number]
