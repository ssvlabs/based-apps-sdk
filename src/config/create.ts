import type { APIs } from '@/api'
import {
  createBAMQueries,
  createBasedAppsAPI,
  createBeaconChainAPI,
  createQueries,
} from '@/libs/api'
import type { ConfigArgs } from '@/utils/zod/config'
import { configArgsSchema } from '@/utils/zod/config'
import { GraphQLClient } from 'graphql-request'

export type ConfigReturnType = {
  apis: APIs
  basedAppsAPI: ReturnType<typeof createBasedAppsAPI>
  graphs: {
    dvt: {
      client: GraphQLClient
      endpoint: string
    }
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

  const dvtGraphQLClient = new GraphQLClient(parsed.dvtGraphUrl)
  const bamGraphQLClient = new GraphQLClient(parsed.bamGraphUrl)

  const apis: APIs = {
    dvt: createQueries(dvtGraphQLClient),
    beacon: createBeaconChainAPI(parsed.beaconchainUrl),
    bam: createBAMQueries(bamGraphQLClient),
  }

  return {
    apis: apis,
    basedAppsAPI: createBasedAppsAPI(apis),
    graphs: {
      dvt: {
        client: dvtGraphQLClient,
        endpoint: parsed.dvtGraphUrl,
      },
      bam: {
        client: bamGraphQLClient,
        endpoint: parsed.bamGraphUrl,
      },
    },
  } satisfies ConfigReturnType
}
