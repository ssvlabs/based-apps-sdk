import type { Address } from 'abitype'
import { defineChain } from 'viem'

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
  hoodi,
} as const

export const chainIds = [hoodi.id] as const
export type ChainId = (typeof chainIds)[number]
export const networks = ['hoodi'] as const
export type Network = Lowercase<(typeof networks)[number]>
export const bam_graph_endpoints: Record<ChainId, string> = {
  [hoodi.id]: 'https://api.studio.thegraph.com/query/71118/ssv-network-hoodi/version/latest/',
}
export const bam_paid_graph_endpoints: Record<ChainId, string> = {
  [hoodi.id]:
    'https://gateway.thegraph.com/api/subgraphs/id/F4AU5vPCuKfHvnLsusibxJEiTN7ELCoYTvnzg3YHGYbh',
}

export type ContractAddresses = {
  bapp: Address
}
export const contracts: Record<ChainId, ContractAddresses> = {
  [hoodi.id]: {
    bapp: '0xc7fCFeEc5FB9962bDC2234A7a25dCec739e27f9f',
  },
}
