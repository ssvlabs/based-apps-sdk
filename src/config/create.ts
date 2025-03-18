import { BAppABI } from '@/abi/b-app'
import type { APIs } from '@/api'
import type { ContractInteractions } from '@/contract-interactions/types'
import { createBAMQueries, createBasedAppsAPI, createBeaconChainAPI } from '@/libs/api'
import type { ChainId } from '@/main'
import { bam_graph_endpoints, contracts, createReader, createWriter } from '@/main'
import type { ConfigArgs } from '@/utils/zod/config'
import { configArgsSchema } from '@/utils/zod/config'
import { GraphQLClient } from 'graphql-request'

export type ConfigReturnType = {
  apis: APIs
  basedAppsAPI: ReturnType<typeof createBasedAppsAPI>
  contracts: {
    bapp: ContractInteractions<'bapp'>
  }
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
    'apis' in props &&
    'basedAppsAPI' in props &&
    'graphs' in props
  )
}

export const createConfig = (props: ConfigArgs): ConfigReturnType => {
  const parsed = configArgsSchema.parse(props)

  const chain = parsed.publicClient.chain!.id as ChainId

  const bapEndpoint = import.meta.env.VITE_BAM_GRAPH_ENDPOINT || bam_graph_endpoints[chain]
  const bamGraphQLClient = new GraphQLClient(bapEndpoint)

  const apis: APIs = {
    beacon: createBeaconChainAPI(parsed.beaconchainUrl),
    bam: createBAMQueries(bamGraphQLClient),
  }

  return {
    apis: apis,
    basedAppsAPI: createBasedAppsAPI(apis),
    contracts: {
      bapp: {
        read: createReader({
          abi: BAppABI,
          contractAddress: contracts[chain].bapp,
          publicClient: parsed.publicClient,
        }),
        write: createWriter({
          abi: BAppABI,
          contractAddress: contracts[chain].bapp,
          publicClient: parsed.publicClient,
          walletClient: parsed.walletClient,
        }),
      },
    },
    graphs: {
      bam: {
        client: bamGraphQLClient,
        endpoint: bapEndpoint,
      },
    },
  } satisfies ConfigReturnType
}
