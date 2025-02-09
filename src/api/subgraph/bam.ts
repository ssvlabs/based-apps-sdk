import type {
  GetBAppDelegatorsQueryVariables,
  GetObligatedBalancesQueryVariables,
  GetParticipantWeightInputQueryVariables,
  GetStrategyBAppOptInsQueryVariables,
} from '@/graphql/bam/graphql'
import {
  GetBAppDelegatorsDocument,
  GetObligatedBalancesDocument,
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

export const getObligatedBalances = (
  client: GraphQLClient,
  args: GetObligatedBalancesQueryVariables,
) => client.request(GetObligatedBalancesDocument, args).then((res) => res.bapp)

export const getBAppDelegators = (client: GraphQLClient, args: GetBAppDelegatorsQueryVariables) =>
  client.request(GetBAppDelegatorsDocument, args).then((res) => res.bapp)

export const getBAMQueries = (client: GraphQLClient) => ({
  getStrategyBAppOptIns: getStrategyBAppOptIns.bind(null, client) as RemoveConfigArg<
    typeof getStrategyBAppOptIns
  >,
  getParticipantWeightInput: getParticipantWeightInput.bind(null, client) as RemoveConfigArg<
    typeof getParticipantWeightInput
  >,
  getObligatedBalances: getObligatedBalances.bind(null, client) as RemoveConfigArg<
    typeof getObligatedBalances
  >,
  getBAppDelegators: getBAppDelegators.bind(null, client) as RemoveConfigArg<
    typeof getBAppDelegators
  >,
})
