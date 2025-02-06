import { BasedAppsSDK } from '@/sdk'
import { describe, test } from 'vitest'

describe('BAM Real Calls', () => {
  const sdk = new BasedAppsSDK({
    chain: 17000,
  })

  test('should get based apps', async () => {
    const basedApps = await sdk.api.calculateParticipantWeights({
      bAppId: '0x64714cf5db177398729e37627be0fc08f43b17a6',
    })
    console.log('basedApps:', JSON.stringify(basedApps, null, 2))
  })
})
