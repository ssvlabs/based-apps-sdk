import { BasedAppsSDK } from '@/sdk'
import type { ConfigArgs } from '@/utils/zod/config'
import { describe, test, expect, vi, beforeEach } from 'vitest'

describe('BasedAppsSDK', () => {
  beforeEach(() => {
    // Reset the import.meta.env before each test
    vi.stubGlobal('import.meta', { env: {} })
  })

  test('should instantiate SDK with valid URLs', () => {
    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      chain: 'holesky',
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
          beaconchainUrl: 'not-a-url',
          chain: 'holesky',
        }),
    ).toThrow()
  })

  test('should throw error when some URLs are missing', () => {
    const partialConfig: Pick<ConfigArgs, 'chain'> = {
      chain: 'holesky',
    }
    expect(() => new BasedAppsSDK(partialConfig as ConfigArgs)).toThrow()
  })

  test('should use VITE_BAM_GRAPH_ENDPOINT when provided', () => {
    const customEndpoint = 'https://custom.endpoint/graphql'
    vi.stubEnv('VITE_BAM_GRAPH_ENDPOINT', customEndpoint)

    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      chain: 'holesky',
    })

    expect(sdk.core.graphs.bam.endpoint).toBe(customEndpoint)
    vi.unstubAllEnvs()
  })
})
