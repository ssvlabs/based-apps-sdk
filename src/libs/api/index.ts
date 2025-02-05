import type { APIs } from '@/api'
import { getBasedAppsAPI } from '@/api/based-apps-api'
import { getBeaconChainAPI } from '@/api/beacon-chain-api'
import { getSSVAPI } from '@/api/ssv-api'
import { getBAMQueries } from '@/api/subgraph/bam'
import { getDVTQueries } from '@/api/subgraph/dvt'
import type { GraphQLClient } from 'graphql-request'

export const createQueries = (graphqlClient: GraphQLClient) => {
  return getDVTQueries(graphqlClient)
}

export const createSSVAPI = (endpoint: string) => {
  return getSSVAPI(endpoint)
}

export const createBeaconChainAPI = (endpoint: string) => {
  return getBeaconChainAPI(endpoint)
}

export const createBAMQueries = (graphqlClient: GraphQLClient) => {
  return getBAMQueries(graphqlClient)
}

export const createBasedAppsAPI = (apis: APIs) => {
  return getBasedAppsAPI(apis)
}
