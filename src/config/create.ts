import type { APIs } from '@/api'
import { createBAMQueries, createBasedAppsAPI, createBeaconChainAPI } from '@/libs/api'
import { bam_graph_endpoints } from '@/main'
import type { ConfigArgs } from '@/utils/zod/config'
import { configArgsSchema } from '@/utils/zod/config'
import { GraphQLClient } from 'graphql-request'

export type ConfigReturnType = {
  apis: APIs
  basedAppsAPI: ReturnType<typeof createBasedAppsAPI>
  graphs: {
    bam: {
      client: GraphQLClient
      endpoint: string
    }
  }
}

export const isConfig = (props: unknown): props is ConfigReturnType => {
  return (
    typeof props === 'object' &&
    props !== null &&
    'chain' in props &&
    'env' in props &&
    'apis' in props &&
    'basedAppsAPI' in props &&
    'graphs' in props
  )
}

export const createConfig = (props: ConfigArgs): ConfigReturnType => {
  const parsed = configArgsSchema.parse(props)

  const bapEndpoint = import.meta.env.VITE_BAM_GRAPH_ENDPOINT || bam_graph_endpoints[parsed.chain]
  const bamGraphQLClient = new GraphQLClient(bapEndpoint)

  const apis: APIs = {
    beacon: createBeaconChainAPI(parsed.beaconchainUrl),
    bam: createBAMQueries(bamGraphQLClient),
  }

  return {
    apis: apis,
    basedAppsAPI: createBasedAppsAPI(apis),
    graphs: {
      bam: {
        client: bamGraphQLClient,
        endpoint: bapEndpoint,
      },
    },
  } satisfies ConfigReturnType
}
