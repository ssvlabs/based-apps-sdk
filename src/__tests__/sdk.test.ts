import { BasedAppsSDK } from '@/sdk'
import type { ConfigArgs } from '@/utils/zod/config'
import { describe, test, expect, vi, beforeEach } from 'vitest'

import { createPublicClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { chains } from '@/config'

const chain = chains.holesky // or chains.holesky
const transport = http()

const publicClient = createPublicClient({
  chain,
  transport,
})

const account = privateKeyToAccount(
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
)
const walletClient = createWalletClient({
  account,
  chain,
  transport,
})

describe('BasedAppsSDK', () => {
  beforeEach(() => {
    // Reset the import.meta.env before each test
    vi.stubGlobal('import.meta', { env: {} })
  })

  test('should instantiate SDK with valid URLs', () => {
    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      chain: 'holesky',
      publicClient,
      walletClient,
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
          publicClient,
          walletClient,
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
      publicClient,
      walletClient,
    })

    console.log(import.meta.env.VITE_BAM_GRAPH_ENDPOINT)

    expect(sdk.core.graphs.bam.endpoint).toBe(customEndpoint)
    vi.unstubAllEnvs()
  })

  test('should have contract.bapp.read and contract.bapp.write functionality', () => {
    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      chain: 'holesky',
      publicClient,
      walletClient,
    })

    expect(sdk.contracts).toBeDefined()
    expect(sdk.contracts.bapp).toBeDefined()
    expect(sdk.contracts.bapp.read).toBeDefined()
    expect(sdk.contracts.bapp.write).toBeDefined()
    expect(typeof sdk.contracts.bapp.read).toBe('object')
    expect(typeof sdk.contracts.bapp.write).toBe('object')
  })
})
