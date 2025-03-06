import type {
  GetAllBappsMetadataUrIsQuery,
  GetAllStrategiesDepositedToQueryVariables,
  GetAllStrategiesForAccountQueryVariables,
  GetAllStrategiesForBappQueryVariables,
  GetAllStrategyObligatedBalancesForBappQueryVariables,
  GetBAppDelegatorsQueryVariables,
  GetBappMetadataUriQueryVariables,
  GetDepositedBalancesForStrategyQueryVariables,
  GetObligatedBalancesQueryVariables,
  GetParticipantWeightInputQueryVariables,
  GetStrategyBAppOptInsQueryVariables,
  GetTotalDelegatedPercentageForAccountQueryVariables,
  GetValidatorsByAccountQueryVariables,
} from '@/graphql/bam/graphql'
import {
  GetAllBappsMetadataUrIsDocument,
  GetAllStrategiesDepositedToDocument,
  GetAllStrategiesForAccountDocument,
  GetAllStrategiesForBappDocument,
  GetAllStrategyObligatedBalancesForBappDocument,
  GetBAppDelegatorsDocument,
  GetBappMetadataUriDocument,
  GetDepositedBalancesForStrategyDocument,
  GetObligatedBalancesDocument,
  GetParticipantWeightInputDocument,
  GetStrategyBAppOptInsDocument,
  GetTotalDelegatedPercentageForAccountDocument,
  GetValidatorsByAccountDocument,
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

export const getValidatorsByAccount = (
  client: GraphQLClient,
  args: GetValidatorsByAccountQueryVariables,
) =>
  client
    .request(GetValidatorsByAccountDocument, args)
    .then((res) => res.validators.map((v) => v.id))

export const getBappMetadataURI = (client: GraphQLClient, args: GetBappMetadataUriQueryVariables) =>
  client.request(GetBappMetadataUriDocument, args).then((res) => res.bapp)

export const getAllBappsMetadataURIs = (client: GraphQLClient) =>
  client.request(GetAllBappsMetadataUrIsDocument).then((res: GetAllBappsMetadataUrIsQuery) => res.bapps)

export const getAllStrategyObligatedBalancesForBapp = (
  client: GraphQLClient,
  args: GetAllStrategyObligatedBalancesForBappQueryVariables
) => client.request(GetAllStrategyObligatedBalancesForBappDocument, args).then((res) => res.bapp)

export const getDepositedBalancesForStrategy = (
  client: GraphQLClient,
  args: GetDepositedBalancesForStrategyQueryVariables
) => client.request(GetDepositedBalancesForStrategyDocument, args).then((res) => res.strategy)

export const getAllStrategiesDepositedTo = (
  client: GraphQLClient,
  args: GetAllStrategiesDepositedToQueryVariables
) => client.request(GetAllStrategiesDepositedToDocument, args).then((res) => res.account)

export const getTotalDelegatedPercentageForAccount = (
  client: GraphQLClient,
  args: GetTotalDelegatedPercentageForAccountQueryVariables
) => client.request(GetTotalDelegatedPercentageForAccountDocument, args).then((res) => res.account?.totalDelegatedPercentage)

export const getAllStrategiesForBapp = (
  client: GraphQLClient,
  args: GetAllStrategiesForBappQueryVariables
) => client.request(GetAllStrategiesForBappDocument, args).then((res) => 
  res.bapp?.strategies.map(strategyInfo => strategyInfo.strategy.id) || []
)

export const getAllStrategiesForAccount = (
  client: GraphQLClient,
  args: GetAllStrategiesForAccountQueryVariables
) => client.request(GetAllStrategiesForAccountDocument, args).then((res) => res.account?.strategies || [])

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
  getValidatorsByAccount: getValidatorsByAccount.bind(null, client) as RemoveConfigArg<
    typeof getValidatorsByAccount
  >,
  getBappMetadataURI: getBappMetadataURI.bind(null, client) as RemoveConfigArg<
    typeof getBappMetadataURI
  >,
  getAllBappsMetadataURIs: getAllBappsMetadataURIs.bind(null, client) as RemoveConfigArg<
    typeof getAllBappsMetadataURIs
  >,
  getAllStrategyObligatedBalancesForBapp: getAllStrategyObligatedBalancesForBapp.bind(null, client) as RemoveConfigArg<
    typeof getAllStrategyObligatedBalancesForBapp
  >,
  getDepositedBalancesForStrategy: getDepositedBalancesForStrategy.bind(null, client) as RemoveConfigArg<
    typeof getDepositedBalancesForStrategy
  >,
  getAllStrategiesDepositedTo: getAllStrategiesDepositedTo.bind(null, client) as RemoveConfigArg<
    typeof getAllStrategiesDepositedTo
  >,
  getTotalDelegatedPercentageForAccount: getTotalDelegatedPercentageForAccount.bind(null, client) as RemoveConfigArg<
    typeof getTotalDelegatedPercentageForAccount
  >,
  getAllStrategiesForBapp: getAllStrategiesForBapp.bind(null, client) as RemoveConfigArg<
    typeof getAllStrategiesForBapp
  >,
  getAllStrategiesForAccount: getAllStrategiesForAccount.bind(null, client) as RemoveConfigArg<
    typeof getAllStrategiesForAccount
  >,
})
