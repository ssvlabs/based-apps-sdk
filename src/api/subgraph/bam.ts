import type { GetStrategyBAppOptInsQueryVariables } from '@/graphql/bam/graphql'
import { GetStrategyBAppOptInsDocument } from '@/graphql/bam/graphql'
import type { RemoveConfigArg } from '@/types/methods'
import type { GraphQLClient } from 'graphql-request'

export const getStrategyBAppOptIns = (
  client: GraphQLClient,
  args: GetStrategyBAppOptInsQueryVariables,
) => client.request(GetStrategyBAppOptInsDocument, args).then((res) => res.strategyBAppOptIns)

export const getBAMQueries = (client: GraphQLClient) => ({
  getStrategyBAppOptIns: getStrategyBAppOptIns.bind(null, client) as RemoveConfigArg<
    typeof getStrategyBAppOptIns
  >,
})
