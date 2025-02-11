import { calculateParticipantWeights, getValidatorsBalance } from '@/api/based-apps-api'
import type { GetValidatorBalancesResponse } from '@/api/beacon-chain-api'
import { parseEther, type Address } from 'viem'
import { describe, expect, it } from 'vitest'
import {
  mockAPIs,
  mockGetParticipantWeightInput,
  mockGetValidatorBalances,
  mockGetValidatorsByAccount,
} from './mock-api'

// Mock dependencies

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
      expect(response.balance).toBe(parseEther('64'))
      expect(response.account).toBe('0x77fc6e8b24a623725d935bc88057098d0bca6eb3')
    })
  })

  describe('calculateParticipantWeights', () => {
    it('should calculate weights correctly for single strategy and token', async () => {
      const mockBAppData = {
        bAppTokens: [
          {
            token: '0xtoken1' as Address,
            sharedRiskLevel: '5000', // β = 0.5
            totalObligatedBalance: '1000000',
          },
        ],
        strategies: [
          {
            strategy: {
              id: 'strategy1',
              balances: [{ token: '0xtoken1' as Address, riskValue: '10000' }],
              owner: {
                id: '0xowner1' as Address,
                delegators: [],
              },
            },
            obligations: [
              {
                token: '0xtoken1' as Address,
                obligatedBalance: '1000000',
                percentage: '5000', // 50% obligation
              },
            ],
          },
        ],
      }

      mockGetParticipantWeightInput.mockResolvedValue(mockBAppData)

      const response = await calculateParticipantWeights(mockAPIs, {
        bAppId: '0xbapp1' as Address,
      })

      // With risk = 0.5 and β = 0.5, e^(-0.5 * 1) ≈ 0.6065
      // Since there's only one strategy, c_token = 1/0.6065 ≈ 1.649
      // Final weight = 1.649 * 1 * 0.6065 = 1
      expect(response).toHaveLength(1)
      expect(response[0].id).toBe('strategy1')
      expect(response[0].tokenWeights).toHaveLength(1)
      expect(response[0].tokenWeights[0].token).toBe('0xtoken1')
      expect(response[0].tokenWeights[0].weight).toBeCloseTo(1, 4)
      expect(response[0].validatorBalanceWeight).toBeUndefined()
    })

    it('should handle multiple strategies with different risks', async () => {
      const mockBAppData = {
        bAppTokens: [
          {
            token: '0xtoken1' as Address,
            sharedRiskLevel: '5000', // β = 0.5
            totalObligatedBalance: '2000000',
          },
        ],
        strategies: [
          {
            strategy: {
              id: 'strategy1',
              balances: [{ token: '0xtoken1' as Address, riskValue: '10000' }],
              owner: {
                id: '0xowner1' as Address,
                delegators: [],
              },
            },
            obligations: [
              {
                token: '0xtoken1' as Address,
                obligatedBalance: '1000000',
                percentage: '5000', // 50% obligation
              },
            ],
          },
          {
            strategy: {
              id: 'strategy2',
              balances: [{ token: '0xtoken1' as Address, riskValue: '20000' }],
              owner: {
                id: '0xowner2' as Address,
                delegators: [],
              },
            },
            obligations: [
              {
                token: '0xtoken1' as Address,
                obligatedBalance: '1000000',
                percentage: '7500', // 75% obligation = higher risk
              },
            ],
          },
        ],
      }

      mockGetParticipantWeightInput.mockResolvedValue(mockBAppData)

      const response = await calculateParticipantWeights(mockAPIs, {
        bAppId: '0xbapp1' as Address,
      })

      expect(response).toHaveLength(2)

      // Strategy1: risk = 0.5, β = 0.5, e^(-0.5 * 1) ≈ 0.6065
      // Strategy2: risk = 0.75, β = 0.5, e^(-0.5 * 1) ≈ 0.6065 (max(1,risk) = 1)
      // Both have same risk-adjusted weight because max(1,risk) caps at 1
      expect(response[0].tokenWeights[0].weight).toBeCloseTo(0.5, 4)
      expect(response[1].tokenWeights[0].weight).toBeCloseTo(0.5, 4)

      // Weights should sum to 1
      const totalWeight = response.reduce((sum, s) => sum + s.tokenWeights[0].weight, 0)
      expect(totalWeight).toBeCloseTo(1, 4)
    })

    it('should handle validator balances', async () => {
      const mockValidators = ['0x1234', '0x5678'] as `0x${string}`[]
      const mockBalances = {
        data: [
          { balance: '32000000000', index: '0' },
          { balance: '32000000000', index: '1' },
        ],
        execution_optimistic: false,
        finalized: true,
      }

      const mockBAppData = {
        bAppTokens: [
          {
            token: '0xtoken1' as Address,
            sharedRiskLevel: '5000',
            totalObligatedBalance: '1000000',
          },
        ],
        strategies: [
          {
            strategy: {
              id: 'strategy1',
              balances: [{ token: '0xtoken1' as Address, riskValue: '10000' }],
              owner: {
                id: '0xowner1' as Address,
                delegators: [
                  { percentage: '5000', delegator: { id: '0xdelegator1' } }, // 50% delegation
                ],
              },
            },
            obligations: [
              {
                token: '0xtoken1' as Address,
                obligatedBalance: '1000000',
                percentage: '5000',
              },
            ],
          },
        ],
      }

      mockGetParticipantWeightInput.mockResolvedValue(mockBAppData)
      mockGetValidatorsByAccount.mockResolvedValue(mockValidators)
      mockGetValidatorBalances.mockResolvedValue(mockBalances)

      const response = await calculateParticipantWeights(mockAPIs, {
        bAppId: '0xbapp1' as Address,
      })

      expect(response).toHaveLength(1)
      expect(response[0].id).toBe('strategy1')
      expect(response[0].tokenWeights).toHaveLength(1)
      expect(response[0].validatorBalanceWeight).toBe(1) // 50% of 64 ETH
    })

    it('should handle zero total obligated balance', async () => {
      const mockBAppData = {
        bAppTokens: [
          {
            token: '0xtoken1' as Address,
            sharedRiskLevel: '5000',
            totalObligatedBalance: '0',
          },
        ],
        strategies: [
          {
            strategy: {
              id: 'strategy1',
              balances: [],
              owner: {
                id: '0xowner1' as Address,
                delegators: [],
              },
            },
            obligations: [],
          },
        ],
      }

      mockGetParticipantWeightInput.mockResolvedValue(mockBAppData)

      const response = await calculateParticipantWeights(mockAPIs, {
        bAppId: '0xbapp1' as Address,
      })

      expect(response).toHaveLength(1)
      expect(response[0].tokenWeights).toHaveLength(0)
      expect(response[0].validatorBalanceWeight).toBeUndefined()
    })

    it('should handle missing obligations or balances', async () => {
      const mockBAppData = {
        bAppTokens: [
          {
            token: '0xtoken1' as Address,
            sharedRiskLevel: '5000',
            totalObligatedBalance: '1000000',
          },
        ],
        strategies: [
          {
            strategy: {
              id: 'strategy1',
              balances: [],
              owner: {
                id: '0xowner1' as Address,
                delegators: [],
              },
            },
            obligations: [
              {
                token: '0xtoken1' as Address,
                obligatedBalance: '1000000',
                percentage: '5000',
              },
            ],
          },
        ],
      }

      mockGetParticipantWeightInput.mockResolvedValue(mockBAppData)

      const response = await calculateParticipantWeights(mockAPIs, {
        bAppId: '0xbapp1' as Address,
      })

      expect(response).toHaveLength(1)
      expect(response[0].tokenWeights).toHaveLength(0)
      expect(response[0].validatorBalanceWeight).toBeUndefined()
    })

    it('should throw error when bApp not found', async () => {
      mockGetParticipantWeightInput.mockResolvedValue(null)

      await expect(
        calculateParticipantWeights(mockAPIs, {
          bAppId: '0xbapp1' as Address,
        }),
      ).rejects.toThrow('bApp not found')
    })
  })
})
