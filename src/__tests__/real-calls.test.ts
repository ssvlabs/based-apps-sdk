import { BasedAppsSDK } from '@/sdk'
import { describe, test } from 'vitest'

describe('BAM Real Calls', () => {
  const sdk = new BasedAppsSDK({
    chain: 17000,
  })

  test('should get based apps', async () => {
    // usage of based apps api
    // const basedApps = await sdk.api.calculateParticipantWeights({
    //   bAppId: '0x64714cf5db177398729e37627be0fc08f43b17a6',
    // })
    // console.log('basedApps:', JSON.stringify(basedApps, null, 2))

    // const delegatedBalances = await sdk.api.getDelegatedBalances({
    //   bAppId: '0x64714cf5db177398729e37627be0fc08f43b17a6',
    // })
    // console.log('delegatedBalances:', delegatedBalances)

    const obligatedBalance = await sdk.api.getObligatedBalances({
      bAppId: '0x64714cf5db177398729e37627be0fc08f43b17a6',
    })

    console.log('delegatedBalances:', JSON.stringify(obligatedBalance, null, 2))

    // based apps api functions
    sdk.api.getValidatorsBalance
    sdk.api.calculateParticipantWeights

    // access core
    sdk.core.apis.dvt.getValidatorsByAccount
    sdk.core.apis.beacon.getValidatorBalances
    sdk.core.apis.bam.getParticipantWeightInput
    sdk.core.apis.bam.getStrategyBAppOptIns

    sdk.core.chain // 1 | 17000

    sdk.core.graphs.dvt.client // GraphQLClient
    sdk.core.graphs.dvt.endpoint // graphql endpoint

    sdk.core.graphs.bam.client // GraphQLClient
    sdk.core.graphs.bam.endpoint // graphql endpoint
  })
})
