import { BasedAppsSDK } from '@/sdk'
import { describe, test, expect } from 'vitest'

import { createPublicClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { chains } from '@/config'

describe('Communications', () => {
  test('can communicate with hoodi contract', async () => {
    const chain = chains.hoodi // or chains.mainnet
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

    const result = await sdk.core.contracts.bapp.read.UPGRADE_INTERFACE_VERSION()

    expect(result).toBeTypeOf('string')
  })
  test('can communicate with hoodi contract', async () => {
    const chain = chains.hoodi // or chains.mainnet
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

    const result = await sdk.core.contracts.bapp.read.UPGRADE_INTERFACE_VERSION()

    expect(result).toBeTypeOf('string')
  })

  test('can communicate with the subgraph', async () => {
    const chain = chains.hoodi // or chains.mainnet
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

    const result = await sdk.api.getValidatorsBalance({
      account: '0x0000000000000000000000000000000000000000',
    })

    expect(result).toHaveProperty('account')
    expect(result).toHaveProperty('validators')
    expect(result).toHaveProperty('balance')
  })

  test.skipIf(!import.meta.env.VITE_SUBGRAPH_API_KEY)(
    'can communicate with the subgraph(apikey)',
    async () => {
      const chain = chains.hoodi // or chains.mainnet
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
        extendedConfig: {
          subgraph: {
            apiKey: import.meta.env.VITE_SUBGRAPH_API_KEY,
          },
        },
      })

      const result = await sdk.api.getValidatorsBalance({
        account: '0x0000000000000000000000000000000000000000',
      })

      expect(result).toHaveProperty('account')
      expect(result).toHaveProperty('validators')
      expect(result).toHaveProperty('balance')
    },
  )
})
