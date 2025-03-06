import type { WeightCalculationOptions } from '@/libs/utils/weights-calculations'
import type { StrategyWeight } from '@/types/weights'
import { calcArithmeticStrategyWeights, calcHarmonicStrategyWeights, calcGeometricStrategyWeights } from '@/libs/utils/weights-calculations'
import { describe, test, expect } from 'vitest'
import type { Address } from 'abitype'

describe('Weights Calculations', () => {
  // Test data setup
  const TOKEN1 = '0x1111111111111111111111111111111111111111' as Address
  const TOKEN2 = '0x2222222222222222222222222222222222222222' as Address

  const baseStrategies: StrategyWeight[] = [
    {
      id: 'strategy1',
      tokenWeights: [
        { token: TOKEN1, weight: 0.6 },
        { token: TOKEN2, weight: 0.4 },
      ],
      validatorBalanceWeight: 0.3,
    },
    {
      id: 'strategy2',
      tokenWeights: [
        { token: TOKEN1, weight: 0.3 },
        { token: TOKEN2, weight: 0.7 },
      ],
      validatorBalanceWeight: 0.7,
    },
  ]

  describe('Simple Arithmetic Average', () => {
    test('should calculate with equal coefficients', () => {
      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 1 },
          { token: TOKEN2, coefficient: 1 },
        ],
      }

      const weights = calcArithmeticStrategyWeights(baseStrategies, params)
      expect(weights.get('strategy1')).toBeDefined()
      expect(weights.get('strategy2')).toBeDefined()
      expect(weights.get('strategy1')).toBeGreaterThan(0)
      expect(weights.get('strategy2')).toBeGreaterThan(0)
    })

    test('should calculate with weighted coefficients', () => {
      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 2 },
          { token: TOKEN2, coefficient: 1 },
        ],
      }

      const weights = calcArithmeticStrategyWeights(baseStrategies, params)
      // Strategy1 should have higher weight due to higher TOKEN1 weight
      expect(weights.get('strategy1')!).toBeGreaterThan(weights.get('strategy2')!)
    })

    test('should include validator coefficient in calculation', () => {
      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 1 },
          { token: TOKEN2, coefficient: 1 },
        ],
        validatorCoefficient: 1,
      }

      const weights = calcArithmeticStrategyWeights(baseStrategies, params)
      // Strategy2 should have higher weight due to higher validator weight
      expect(weights.get('strategy2')!).toBeGreaterThan(weights.get('strategy1')!)
    })
  })

  describe('Harmonic Average', () => {
    test('should calculate with equal coefficients', () => {
      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 1 },
          { token: TOKEN2, coefficient: 1 },
        ],
      }

      const weights = calcHarmonicStrategyWeights(baseStrategies, params)
      expect(weights.get('strategy1')).toBeDefined()
      expect(weights.get('strategy2')).toBeDefined()
      // Sum of weights should be close to 1 (normalized)
      expect(weights.get('strategy1')! + weights.get('strategy2')!).toBeCloseTo(1)
    })

    test('should calculate with weighted coefficients', () => {
      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 2 },
          { token: TOKEN2, coefficient: 1 },
        ],
      }

      const weights = calcHarmonicStrategyWeights(baseStrategies, params)
      // Weights should be normalized
      expect(weights.get('strategy1')! + weights.get('strategy2')!).toBeCloseTo(1)
    })

    test('should handle validator coefficient', () => {
      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 1 },
          { token: TOKEN2, coefficient: 1 },
        ],
        validatorCoefficient: 2,
      }

      const weights = calcHarmonicStrategyWeights(baseStrategies, params)
      // Strategy2 should have higher weight due to higher validator weight
      expect(weights.get('strategy2')!).toBeGreaterThan(weights.get('strategy1')!)
      expect(weights.get('strategy1')! + weights.get('strategy2')!).toBeCloseTo(1)
    })

    test('should handle zero weights correctly', () => {
      const strategiesWithZero: StrategyWeight[] = [
        {
          id: 'strategy1',
          tokenWeights: [
            { token: TOKEN1, weight: 0 },
            { token: TOKEN2, weight: 0.4 },
          ],
          validatorBalanceWeight: 0.3,
        },
        ...baseStrategies.slice(1),
      ]

      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 1 },
          { token: TOKEN2, coefficient: 1 },
        ],
      }

      const weights = calcHarmonicStrategyWeights(strategiesWithZero, params)
      expect(weights.get('strategy1')).toBe(0)
      expect(weights.get('strategy2')!).toBeCloseTo(1)
    })
  })

  describe('Geometric Average', () => {
    test('should calculate with equal coefficients', () => {
      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 1 },
          { token: TOKEN2, coefficient: 1 },
        ],
      }

      const weights = calcGeometricStrategyWeights(baseStrategies, params)
      expect(weights.get('strategy1')).toBeDefined()
      expect(weights.get('strategy2')).toBeDefined()
      expect(weights.get('strategy1')).toBeGreaterThan(0)
      expect(weights.get('strategy2')).toBeGreaterThan(0)
      expect(weights.get('strategy1')! + weights.get('strategy2')!).toBeCloseTo(1)
    })

    test('should calculate with weighted coefficients', () => {
      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 3 },
          { token: TOKEN2, coefficient: 1 },
        ],
      }

      const weights = calcGeometricStrategyWeights(baseStrategies, params)
      // Strategy1 should have higher weight due to higher TOKEN1 weight and coefficient
      expect(weights.get('strategy1')!).toBeGreaterThan(weights.get('strategy2')!)
      expect(weights.get('strategy1')! + weights.get('strategy2')!).toBeCloseTo(1)
    })

    test('should handle validator coefficient', () => {
      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 1 },
          { token: TOKEN2, coefficient: 1 },
        ],
        validatorCoefficient: 3,
      }

      const weights = calcGeometricStrategyWeights(baseStrategies, params)
      // Strategy2 should have higher weight due to higher validator weight
      expect(weights.get('strategy2')!).toBeGreaterThan(weights.get('strategy1')!)
      expect(weights.get('strategy1')! + weights.get('strategy2')!).toBeCloseTo(1)
    })

    test('should handle zero weights correctly', () => {
      const strategiesWithZero: StrategyWeight[] = [
        {
          id: 'strategy1',
          tokenWeights: [
            { token: TOKEN1, weight: 0 },
            { token: TOKEN2, weight: 0.4 },
          ],
          validatorBalanceWeight: 0.3,
        },
        ...baseStrategies.slice(1),
      ]

      const params: WeightCalculationOptions = {
        coefficients: [
          { token: TOKEN1, coefficient: 1 },
          { token: TOKEN2, coefficient: 1 },
        ],
      }

      const weights = calcGeometricStrategyWeights(strategiesWithZero, params)
      expect(weights.get('strategy1')).toBe(0)
      expect(weights.get('strategy2')!).toBeCloseTo(1)
    })
  })
})
