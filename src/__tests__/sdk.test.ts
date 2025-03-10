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
          publicClient,
          walletClient,
        }),
    ).toThrow()
  })

  test('should throw error when some URLs are missing', () => {
    const partialConfig = {}
    expect(() => new BasedAppsSDK(partialConfig as ConfigArgs)).toThrow()
  })

  test('should use VITE_BAM_GRAPH_ENDPOINT when provided', () => {
    const customEndpoint = 'https://custom.endpoint/graphql'
    vi.stubEnv('VITE_BAM_GRAPH_ENDPOINT', customEndpoint)

    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      publicClient,
      walletClient,
    })

    expect(sdk.core.graphs.bam.endpoint).toBe(customEndpoint)
    vi.unstubAllEnvs()
  })

  test('should have contract.bapp.read and contract.bapp.write functionality', () => {
    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      publicClient,
      walletClient,
    })

    expect(sdk.core.contracts).toBeDefined()
    expect(sdk.core.contracts.bapp).toBeDefined()
    expect(sdk.core.contracts.bapp.read).toBeDefined()
    expect(sdk.core.contracts.bapp.write).toBeDefined()
    expect(typeof sdk.core.contracts.bapp.read).toBe('object')
    expect(typeof sdk.core.contracts.bapp.write).toBe('object')
  })

  test('should throw error when public client and wallet client have different chains', () => {
    // Create a public client with the holesky chain
    const holeskyPublicClient = createPublicClient({
      chain: chains.holesky,
      transport,
    })

    // Create another chain for test (simulating a different chain)
    const differentChain = {
      ...chains.holesky,
      id: chains.holesky.id + 1, // Use a different chain ID
      name: 'Different Chain',
    }

    // Create a wallet client with a different chain
    const differentChainWalletClient = createWalletClient({
      account,
      chain: differentChain,
      transport,
    })

    // Expect the SDK to throw an error when chains don't match
    expect(
      () =>
        new BasedAppsSDK({
          beaconchainUrl: 'https://example.com/beacon',
          publicClient: holeskyPublicClient,
          walletClient: differentChainWalletClient,
        }),
    ).toThrow('Public and wallet client chains must be the same')
  })
})
