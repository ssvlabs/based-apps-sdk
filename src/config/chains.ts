import type { Address } from 'abitype'
import { holesky } from 'viem/chains'
export const chains = {
  holesky,
} as const

export const chainIds = [holesky.id] as const
export type ChainId = (typeof chainIds)[number]
export const networks = ['holesky'] as const
export type Network = Lowercase<(typeof networks)[number]>
export const bam_graph_endpoints: Record<ChainId, string> = {
  [holesky.id]:
    'https://api.studio.thegraph.com/query/71118/based-applications-ssv-holesky/version/latest/',
}

export type ContractAddresses = {
  bapp: Address
}
export const contracts: Record<ChainId, ContractAddresses> = {
  [holesky.id]: {
    bapp: '0x352A18AEe90cdcd825d1E37d9939dCA86C00e281',
  },
}
