import type { APIs } from '@/api'
import { getBappSlashableBalance, getValidatorsBalance } from '@/api/based-apps-api'
import type { GetValidatorBalancesResponse } from '@/api/beacon-chain-api'
import type { Address } from 'viem'
import { describe, expect, it, vi } from 'vitest'

// Mock dependencies
const mockGetValidatorsByAccount = vi.fn()
const mockGetValidatorBalances = vi.fn()
const mockGetStrategyBAppOptIns = vi.fn()

const mockAPIs: APIs = {
  ssv: {
    getValidatorsByAccount: mockGetValidatorsByAccount,
  },
  beacon: {
    getValidatorBalances: mockGetValidatorBalances,
  },
  bam: {
    getStrategyBAppOptIns: mockGetStrategyBAppOptIns,
  },
} as APIs

describe('Based Apps API Tests', () => {
  describe('getValidatorsBalance', () => {
    it('should calculate total balance correctly', async () => {
      const mockValidators = ['0x1234', '0x5678'] as `0x${string}`[]
      const mockBalances: GetValidatorBalancesResponse = {
        data: [
          { balance: '32000000000', index: '0' },
          { balance: '32000000000', index: '1' },
        ],
        execution_optimistic: false,
        finalized: true,
      }

      mockGetValidatorsByAccount.mockResolvedValue(mockValidators)
      mockGetValidatorBalances.mockResolvedValue(mockBalances)

      const response = await getValidatorsBalance(mockAPIs, {
        account: '0x77fc6e8b24a623725d935bc88057098d0bca6eb3',
      })

      expect(response.validators).toEqual(mockValidators)
      expect(response.balance).toBe('64')
      expect(response.account).toBe('0x77fc6e8b24a623725d935bc88057098d0bca6eb3')
    })
  })

  describe('getBappSlashableBalance', () => {
    it('should calculate slashable balances correctly', async () => {
      const mockOptIns = [
        {
          id: '0x1',
          strategy: {
            balances: [
              { token: '0xtoken1' as Address, balance: '1000000' },
              { token: '0xtoken2' as Address, balance: '2000000' },
            ],
          },
          obligations: [
            { token: '0xtoken1' as Address, percentage: '5000' }, // 50%
            { token: '0xtoken2' as Address, percentage: '2500' }, // 25%
          ],
        },
      ]

      mockGetStrategyBAppOptIns.mockResolvedValue(mockOptIns)

      const response = await getBappSlashableBalance(mockAPIs, {
        bAppId: '0xbapp1' as Address,
      })

      expect(response).toEqual([
        { token: '0xtoken1', balance: 500000n }, // 50% of 1000000
        { token: '0xtoken2', balance: 500000n }, // 25% of 2000000
      ])

      expect(mockGetStrategyBAppOptIns).toHaveBeenCalledWith({
        bAppId: '0xbapp1',
      })
    })

    it('should handle multiple strategies and tokens correctly', async () => {
      const mockOptIns = [
        {
          id: '0x1',
          strategy: {
            balances: [
              { token: '0xtoken1' as Address, balance: '1000000' },
              { token: '0xtoken2' as Address, balance: '1000000' },
            ],
          },
          obligations: [
            { token: '0xtoken1' as Address, percentage: '5000' },
            { token: '0xtoken2' as Address, percentage: '2500' },
          ],
        },
        {
          id: '0x2',
          strategy: {
            balances: [
              { token: '0xtoken1' as Address, balance: '1000000' },
              { token: '0xtoken2' as Address, balance: '1000000' },
            ],

          },
          obligations: [
            { token: '0xtoken1' as Address, percentage: '7500' },
            { token: '0xtoken2' as Address, percentage: '2500' },
          ],

        },
      ]

      mockGetStrategyBAppOptIns.mockResolvedValue(mockOptIns)

      const response = await getBappSlashableBalance(mockAPIs, {
        bAppId: '0xbapp1' as Address,
      })

      expect(response).toEqual([
        { token: '0xtoken1', balance: 1250000n }, // (50% of 1000000) + (75% of 1000000)
        { token: '0xtoken2', balance: 500000n }, // (25% of 2000000) + (25% of 2000000)
      ])
    })

    it('should handle empty responses', async () => {
      mockGetStrategyBAppOptIns.mockResolvedValue([])

      const response = await getBappSlashableBalance(mockAPIs, {
        bAppId: '0xbapp1' as Address,
      })

      expect(response).toEqual([])
    })
  })
})
