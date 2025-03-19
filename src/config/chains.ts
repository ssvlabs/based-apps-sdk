import type { Address } from 'abitype'
import { defineChain } from 'viem'
import { holesky } from 'viem/chains'

export const hoodi = defineChain({
  id: 560048,
  name: 'Hoodi',
  rpcUrls: {
    default: {
      http: ['https://rpc.hoodi.ethpandaops.io'],
    },
  },
  nativeCurrency: {
    name: 'Hoodi Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  testnet: true,
})

export const chains = {
  holesky,
  hoodi,
} as const

export const chainIds = [holesky.id, hoodi.id] as const
export type ChainId = (typeof chainIds)[number]
export const networks = ['holesky', 'hoodi'] as const
export type Network = Lowercase<(typeof networks)[number]>
export const bam_graph_endpoints: Record<ChainId, string> = {
  [holesky.id]:
    'https://api.studio.thegraph.com/query/71118/based-applications-ssv-holesky/version/latest/',
  [hoodi.id]:
    'https://api.studio.thegraph.com/query/71118/based-applications-ssv-hoodi/version/latest/',
}

export type ContractAddresses = {
  bapp: Address
}
export const contracts: Record<ChainId, ContractAddresses> = {
  [holesky.id]: {
    bapp: '0x9B3345F3B1Ce2d8655FC4B6e2ed39322d52aA317',
  },
  [hoodi.id]: {
    bapp: '0x3F2983b813054Eba76Ae137DfA77836CA8b00ACE',
  },
}
