import { BasedAppsSDK } from '@/sdk'
import type { ConfigArgs } from '@/utils/zod/config'
import { describe, test, expect } from 'vitest'

describe('BasedAppsSDK', () => {
  test('should instantiate SDK with valid URLs', () => {
    const sdk = new BasedAppsSDK({
      bamGraphUrl: 'https://example.com/bam',
      dvtGraphUrl: 'https://example.com/dvt',
      beaconchainUrl: 'https://example.com/beacon',
    })

    expect(sdk).toBeInstanceOf(BasedAppsSDK)
    expect(sdk.core).toBeDefined()
    expect(sdk.api).toBeDefined()
    expect(sdk.utils).toBeDefined()
  })

  test('should throw error when URLs are missing', () => {
    expect(() => new BasedAppsSDK({} as ConfigArgs)).toThrow()
  })

  test('should throw error when URLs are invalid', () => {
    expect(
      () =>
        new BasedAppsSDK({
          bamGraphUrl: 'not-a-url',
          dvtGraphUrl: 'not-a-url',
          beaconchainUrl: 'not-a-url',
        }),
    ).toThrow()
  })

  test('should throw error when some URLs are missing', () => {
    const partialConfig: Pick<ConfigArgs, 'bamGraphUrl' | 'beaconchainUrl'> = {
      bamGraphUrl: 'https://example.com/bam',
      beaconchainUrl: 'https://example.com/beacon',
    }
    expect(() => new BasedAppsSDK(partialConfig as ConfigArgs)).toThrow()
  })
})
