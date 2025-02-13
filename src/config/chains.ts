import type { Address } from 'abitype'
import { holesky } from 'viem/chains'
export const chains = {
  holesky,
} as const

export const chainIds = Object.values(chains).map((chain) => chain.id)

export type SDKEnvironment = 'stage' | 'prod'

export type SupportedChainsIDs = (typeof chainIds)[number]

type EndpointsRecord = Record<SDKEnvironment, Record<SupportedChainsIDs, string>>

export const dvt_graph_endpoints: EndpointsRecord = {
  stage: {
    [holesky.id]: 'https://api.studio.thegraph.com/query/53804/ssv-bapps-subgraph/version/latest/',
  },
  prod: {
    [holesky.id]:
      'https://api.studio.thegraph.com/query/71118/based-applications-ssv-holesky/version/latest/',
  },
}
export const bam_graph_endpoints: EndpointsRecord = {
  stage: {
    [holesky.id]: 'https://api.studio.thegraph.com/query/53804/ssv-bapps-subgraph/version/latest/',
  },
  prod: {
    [holesky.id]:
      'https://api.studio.thegraph.com/query/71118/based-applications-ssv-holesky/version/latest/',
  },
}
export const beaconchain_endpoints: EndpointsRecord = {
  stage: {
    [holesky.id]: 'http://57.129.73.156:31101',
  },
  prod: {
    [holesky.id]: 'http://57.129.73.156:31101',
  },
}

export const rest_endpoints: EndpointsRecord = {
  stage: {
    [holesky.id]: 'https://api.ssv.network/api/v4/holesky',
  },
  prod: {
    [holesky.id]: 'https://api.ssv.network/api/v4/holesky',
  },
}

export type ContractAddresses = {
  setter: Address
  getter: Address
  token: Address
}
export const contracts: Record<SupportedChainsIDs, ContractAddresses> = {
  [holesky.id]: {
    setter: '0x38A4794cCEd47d3baf7370CcC43B560D3a1beEFA',
    getter: '0x352A18AEe90cdcd825d1E37d9939dCA86C00e281',
    token: '0xad45A78180961079BFaeEe349704F411dfF947C6',
  },
}
