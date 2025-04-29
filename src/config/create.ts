import { BAppABI } from '@/abi/b-app'
import type { APIs } from '@/api'
import type { ContractInteractions } from '@/contract-interactions/types'
import { createBAMQueries, createBasedAppsAPI, createBeaconChainAPI } from '@/libs/api'
import type { ChainId } from '@/main'
import {
  bam_graph_endpoints,
  bam_paid_graph_endpoints,
  contracts,
  createReader,
  createWriter,
} from '@/main'
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
  const { publicClient, walletClient, beaconchainUrl, extendedConfig } =
    configArgsSchema.parse(props)

  const chain = publicClient.chain!.id as ChainId
  const hasAPIKey = Boolean(extendedConfig?.subgraph?.apiKey)

  const defaultBamGraphEndpoint = hasAPIKey
    ? bam_paid_graph_endpoints[chain]
    : bam_graph_endpoints[chain]

  const bapEndpoint = extendedConfig?.subgraph?.url || defaultBamGraphEndpoint

  const requestConfig = {
    headers: {
      Authorization: `Bearer ${extendedConfig?.subgraph?.apiKey}`,
    },
  }

  const bamGraphQLClient = new GraphQLClient(bapEndpoint, hasAPIKey ? requestConfig : undefined)

  const apis: APIs = {
    beacon: createBeaconChainAPI(beaconchainUrl),
    bam: createBAMQueries(bamGraphQLClient),
  }

  const bappContractAddress = extendedConfig?.contract || contracts[chain].bapp

  return {
    apis: apis,
    basedAppsAPI: createBasedAppsAPI(apis),
    contracts: {
      bapp: {
        read: createReader({
          abi: BAppABI,
          contractAddress: bappContractAddress,
          publicClient: publicClient,
        }),
        write: createWriter({
          abi: BAppABI,
          contractAddress: bappContractAddress,
          publicClient: publicClient,
          walletClient: walletClient,
        }),
        address: bappContractAddress,
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
