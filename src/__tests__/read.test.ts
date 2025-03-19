import { BasedAppsSDK } from '@/sdk'
import { describe, test, vi, beforeEach, expect } from 'vitest'

import { createPublicClient, createWalletClient, http, isAddress } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { chains } from '@/config'

describe('Read Contract', () => {
  beforeEach(() => {
    // Reset the import.meta.env before each test
    vi.stubGlobal('import.meta', { env: {} })
  })

  test('can communicate with holesky contract', async () => {
    const chain = chains.holesky // or chains.holesky
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

    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      publicClient,
      walletClient,
    })

    const result = await sdk.core.contracts.bapp.read.ETH_ADDRESS()

    expect(isAddress(result)).toBe(true)
  })
  test('can communicate with hoodi contract', async () => {
    const chain = chains.hoodi // or chains.holesky
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

    const sdk = new BasedAppsSDK({
      beaconchainUrl: 'https://example.com/beacon',
      publicClient,
      walletClient,
    })

    const result = await sdk.core.contracts.bapp.read.ETH_ADDRESS()

    expect(isAddress(result)).toBe(true)
  })
})
