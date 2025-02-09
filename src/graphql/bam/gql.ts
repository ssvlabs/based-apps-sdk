/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query GetStrategyBAppOptIns($bAppId: Bytes!) {\n  strategyBAppOptIns(where: {bApp_: {id: $bAppId}}) {\n    id\n    strategy {\n      balances {\n        token\n        balance\n      }\n    }\n    obligations {\n      token\n      percentage\n    }\n  }\n}\n\nquery GetParticipantWeightInput($bAppId: ID!) {\n  bapp(id: $bAppId) {\n    bAppTokens {\n      token\n      sharedRiskLevel\n      totalObligatedBalance\n    }\n    strategies {\n      obligations {\n        obligatedBalance\n        token\n        percentage\n      }\n      strategy {\n        id\n        owner {\n          id\n          delegators {\n            percentage\n            delegator {\n              id\n            }\n          }\n        }\n        balances {\n          token\n          riskValue\n        }\n      }\n    }\n  }\n}\n\nquery GetObligatedBalances($bAppId: ID!) {\n  bapp(id: $bAppId) {\n    bAppTokens {\n      totalObligatedBalance\n      token\n    }\n    strategies {\n      id\n      obligations {\n        token\n        obligatedBalance\n      }\n    }\n  }\n}\n\nquery GetBAppDelegators($bAppId: ID!) {\n  bapp(id: $bAppId) {\n    strategies {\n      strategy {\n        id\n        owner {\n          delegators {\n            percentage\n            delegator {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetStrategyBAppOptInsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetStrategyBAppOptIns($bAppId: Bytes!) {\n  strategyBAppOptIns(where: {bApp_: {id: $bAppId}}) {\n    id\n    strategy {\n      balances {\n        token\n        balance\n      }\n    }\n    obligations {\n      token\n      percentage\n    }\n  }\n}\n\nquery GetParticipantWeightInput($bAppId: ID!) {\n  bapp(id: $bAppId) {\n    bAppTokens {\n      token\n      sharedRiskLevel\n      totalObligatedBalance\n    }\n    strategies {\n      obligations {\n        obligatedBalance\n        token\n        percentage\n      }\n      strategy {\n        id\n        owner {\n          id\n          delegators {\n            percentage\n            delegator {\n              id\n            }\n          }\n        }\n        balances {\n          token\n          riskValue\n        }\n      }\n    }\n  }\n}\n\nquery GetObligatedBalances($bAppId: ID!) {\n  bapp(id: $bAppId) {\n    bAppTokens {\n      totalObligatedBalance\n      token\n    }\n    strategies {\n      id\n      obligations {\n        token\n        obligatedBalance\n      }\n    }\n  }\n}\n\nquery GetBAppDelegators($bAppId: ID!) {\n  bapp(id: $bAppId) {\n    strategies {\n      strategy {\n        id\n        owner {\n          delegators {\n            percentage\n            delegator {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetStrategyBAppOptIns($bAppId: Bytes!) {\n  strategyBAppOptIns(where: {bApp_: {id: $bAppId}}) {\n    id\n    strategy {\n      balances {\n        token\n        balance\n      }\n    }\n    obligations {\n      token\n      percentage\n    }\n  }\n}\n\nquery GetParticipantWeightInput($bAppId: ID!) {\n  bapp(id: $bAppId) {\n    bAppTokens {\n      token\n      sharedRiskLevel\n      totalObligatedBalance\n    }\n    strategies {\n      obligations {\n        obligatedBalance\n        token\n        percentage\n      }\n      strategy {\n        id\n        owner {\n          id\n          delegators {\n            percentage\n            delegator {\n              id\n            }\n          }\n        }\n        balances {\n          token\n          riskValue\n        }\n      }\n    }\n  }\n}\n\nquery GetObligatedBalances($bAppId: ID!) {\n  bapp(id: $bAppId) {\n    bAppTokens {\n      totalObligatedBalance\n      token\n    }\n    strategies {\n      id\n      obligations {\n        token\n        obligatedBalance\n      }\n    }\n  }\n}\n\nquery GetBAppDelegators($bAppId: ID!) {\n  bapp(id: $bAppId) {\n    strategies {\n      strategy {\n        id\n        owner {\n          delegators {\n            percentage\n            delegator {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;