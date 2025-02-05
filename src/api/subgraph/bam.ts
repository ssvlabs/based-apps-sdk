import type {
  GetParticipantWeightInputQueryVariables,
  GetStrategyBAppOptInsQueryVariables,
} from '@/graphql/bam/graphql'
import {
  GetParticipantWeightInputDocument,
  GetStrategyBAppOptInsDocument,
} from '@/graphql/bam/graphql'
import type { RemoveConfigArg } from '@/types/methods'
import type { GraphQLClient } from 'graphql-request'

export const getStrategyBAppOptIns = (
  client: GraphQLClient,
  args: GetStrategyBAppOptInsQueryVariables,
) => client.request(GetStrategyBAppOptInsDocument, args).then((res) => res.strategyBAppOptIns)

export const getParticipantWeightInput = (
  client: GraphQLClient,
  args: GetParticipantWeightInputQueryVariables,
) => client.request(GetParticipantWeightInputDocument, args).then((res) => res.bapp)

export const getBAMQueries = (client: GraphQLClient) => ({
  getStrategyBAppOptIns: getStrategyBAppOptIns.bind(null, client) as RemoveConfigArg<
    typeof getStrategyBAppOptIns
  >,
  getParticipantWeightInput: getParticipantWeightInput.bind(null, client) as RemoveConfigArg<
    typeof getParticipantWeightInput
  >,
})
