import { MainnetV4GetterABI } from '@/abi/mainnet/v4/getter'
import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import { TokenABI } from '@/abi/token'
import { createReader, createWriter } from '@/contract-interactions/create'

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
import type { PublicClient, WalletClient } from 'viem'
import type { ContractAddresses, SupportedChainsIDs } from './chains'
import { bam_graph_endpoints, beaconchain_endpoints, dvt_graph_endpoints } from './chains'

export type ConfigReturnType = {
  // publicClient: PublicClient
  chain: SupportedChainsIDs
  api: APIs & ReturnType<typeof createBasedAppsAPI>
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
    'publicClient' in props &&
    'chain' in props &&
    'api' in props &&
    'graphs' in props
  )
}

type CreateContractInteractionsArgs = {
  walletClient: WalletClient
  publicClient: PublicClient
  addresses: ContractAddresses
}

export const createContractInteractions = ({
  walletClient,
  publicClient,
  addresses,
}: CreateContractInteractionsArgs) => {
  return {
    dvt: {
      write: createWriter<'setter'>({
        abi: MainnetV4SetterABI,
        walletClient,
        publicClient,
        contractAddress: addresses.setter,
      }),
      read: createReader<'getter'>({
        abi: MainnetV4GetterABI,
        publicClient,
        contractAddress: addresses.getter,
      }),
    },
    token: {
      read: createReader<'token'>({
        abi: TokenABI,
        publicClient,
        contractAddress: addresses.token,
      }),
      write: createWriter<'token'>({
        abi: TokenABI,
        walletClient,
        publicClient,
        contractAddress: addresses.token,
      }),
    },
  }
}

export const createConfig = (props: ConfigArgs): ConfigReturnType => {
  const parsed = configArgsSchema.parse(props)
  const { chain } = parsed
  // const { publicClient } = parsed
  // if (!publicClient.chain || !chainIds.includes(publicClient.chain?.id as SupportedChainsIDs))
  //   throw new Error(`Chain must be one of ${chainIds.join(', ')}`)

  const beaconchainEndpoint = beaconchain_endpoints[chain]

  const dvtGraphEndpoint = dvt_graph_endpoints[chain]
  const bamGraphEndpoint = bam_graph_endpoints[chain]

  const dvtGraphQLClient = new GraphQLClient(dvtGraphEndpoint)
  const bamGraphQLClient = new GraphQLClient(bamGraphEndpoint)

  const apis: APIs = {
    dvt: createQueries(dvtGraphQLClient),
    beacon: createBeaconChainAPI(beaconchainEndpoint),
    bam: createBAMQueries(bamGraphQLClient),
  }

  return {
    chain,
    api: {
      dvt: createQueries(dvtGraphQLClient),
      beacon: createBeaconChainAPI(beaconchainEndpoint),
      bam: createBAMQueries(bamGraphQLClient),
      ...createBasedAppsAPI(apis),
    },
    graphs: {
      dvt: {
        client: dvtGraphQLClient,
        endpoint: dvtGraphEndpoint,
      },
      bam: {
        client: bamGraphQLClient,
        endpoint: bamGraphEndpoint,
      },
    },
  } satisfies ConfigReturnType
}
