import { holesky } from 'viem/chains'
export const chains = {
  holesky,
} as const

export const networks = Object.values(chains).map((chain) => chain.name.toLowerCase())
export type Network = Lowercase<(typeof networks)[number]>
type EndpointsRecord = Record<Network, string>

export const bam_graph_endpoints: EndpointsRecord = {
  [holesky.name.toLowerCase()]:
    'https://api.studio.thegraph.com/query/71118/based-applications-ssv-holesky/version/latest/',
}
