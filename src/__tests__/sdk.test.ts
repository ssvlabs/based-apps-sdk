import { BasedAppsSDK } from '@/sdk'
import type { ConfigArgs } from '@/utils/zod/config'
import { describe, test, expect, vi, beforeEach } from 'vitest'

import { createPublicClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { bam_paid_graph_endpoints, chains } from '@/config'

const chain = chains.hoodi
const transport = http()

const publicClient = createPublicClient({
  chain,
  transport,
})

const account = privateKeyToAccount(
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', // Hardhat Account,
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

  test('should use custom subgraph url when provided', () => {
    const customEndpoint = 'https://custom.endpoint/graphql'
    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      publicClient,
      walletClient,
      extendedConfig: {
        subgraph: {
          url: customEndpoint,
        },
      },
    })

    expect(sdk.core.graphs.bam.endpoint).toBe(customEndpoint)
  })

  test('should use custom contract address when provided', () => {
    const customAddress = '0x1234567890abcdef'
    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      publicClient,
      walletClient,
      extendedConfig: {
        contract: customAddress,
      },
    })

    expect(sdk.core.contracts.bapp.address).toBe(customAddress)
  })

  test('should use paid graph when api key is provided', () => {
    const apiKey = '1234567890abcdef'
    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      publicClient,
      walletClient,
      extendedConfig: {
        subgraph: {
          apiKey,
        },
      },
    })
    const requestHeaders = sdk.core.graphs.bam.client.requestConfig.headers as Record<
      string,
      string
    >

    expect(sdk.core.graphs.bam.endpoint).toBe(bam_paid_graph_endpoints[chain.id])
    expect(requestHeaders['Authorization']).toBe(`Bearer ${apiKey}`)
  })

  test('should use custom graph endpoint and api key when both are provided', () => {
    const customEndpoint = 'https://custom.endpoint/graphql'
    const apiKey = '1234567890abcdef'

    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      publicClient,
      walletClient,
      extendedConfig: {
        subgraph: {
          url: customEndpoint,
          apiKey,
        },
      },
    })

    const requestHeaders = sdk.core.graphs.bam.client.requestConfig.headers as Record<
      string,
      string
    >

    expect(sdk.core.graphs.bam.endpoint).toBe(customEndpoint)
    expect(requestHeaders['Authorization']).toBe(`Bearer ${apiKey}`)
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
    // Create a public client with the hoodi chain
    const hoodiPublicClient = createPublicClient({
      chain: chains.hoodi,
      transport,
    })

    // Create another chain for test (simulating a different chain)
    const differentChain = {
      ...chains.hoodi,
      id: chains.hoodi.id + 1, // Use a different chain ID
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
          publicClient: hoodiPublicClient,
          walletClient: differentChainWalletClient,
        }),
    ).toThrow('Public and wallet client chains must be the same')
  })
})
