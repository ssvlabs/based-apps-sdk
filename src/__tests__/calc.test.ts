import type { WeightCalculationParams } from '@/libs/utils/weights-calculations'
import { calcSimpleStrategyWeights } from '@/libs/utils/weights-calculations'
import { describe, test } from 'vitest'

describe('Weights Calculations', () => {
  const simple1: WeightCalculationParams = {
    strategyTokenWeights: [
      {
        id: '10',
        tokenWeights: [
          {
            token: '0x1111111111111111111111111111111111111111',
            weight: 0.6,
          },
          {
            token: '0x2222222222222222222222222222222222222222',
            weight: 0.3,
          },
        ],
        validatorBalanceWeight: 0.3,
      },
      {
        id: '2',
        tokenWeights: [
          {
            token: '0x1111111111111111111111111111111111111111',
            weight: 0.4,
          },
          {
            token: '0x2222222222222222222222222222222222222222',
            weight: 0.7,
          },
        ],
        validatorBalanceWeight: 0.7,
      },
    ],
    coefficients: [
      { token: '0x1111111111111111111111111111111111111111', coefficient: 2 },
      { token: '0x2222222222222222222222222222222222222222', coefficient: 1 },
    ],
  }

  const simple2: WeightCalculationParams = {
    strategyTokenWeights: [
      {
        id: '10',
        tokenWeights: [
          {
            token: '0x1111111111111111111111111111111111111111',
            weight: 0.6,
          },
          {
            token: '0x2222222222222222222222222222222222222222',
            weight: 0.3,
          },
        ],
        validatorBalanceWeight: 0.3,
      },
      {
        id: '2',
        tokenWeights: [
          {
            token: '0x1111111111111111111111111111111111111111',
            weight: 0.4,
          },
          {
            token: '0x2222222222222222222222222222222222222222',
            weight: 0.7,
          },
        ],
        validatorBalanceWeight: 0.7,
      },
    ],
    coefficients: [
      { token: '0x1111111111111111111111111111111111111111', coefficient: 1 },
      { token: '0x2222222222222222222222222222222222222222', coefficient: 2 },
    ],
  }

  const simple3: WeightCalculationParams = {
    strategyTokenWeights: [
      {
        id: '10',
        tokenWeights: [
          {
            token: '0x1111111111111111111111111111111111111111',
            weight: 0.6,
          },
          {
            token: '0x2222222222222222222222222222222222222222',
            weight: 0.3,
          },
        ],
        validatorBalanceWeight: 0.3,
      },
      {
        id: '2',
        tokenWeights: [
          {
            token: '0x1111111111111111111111111111111111111111',
            weight: 0.4,
          },
          {
            token: '0x2222222222222222222222222222222222222222',
            weight: 0.7,
          },
        ],
        validatorBalanceWeight: 0.7,
      },
    ],
    coefficients: [
      { token: '0x1111111111111111111111111111111111111111', coefficient: 2 },
      { token: '0x2222222222222222222222222222222222222222', coefficient: 1 },
    ],
    validatorCoefficient: 0.5,
  }

  test('should calculate simple strategy weights', async () => {
    const strategyWeights1 = calcSimpleStrategyWeights(simple1)
    console.log('strategyWeights1:', strategyWeights1)
    const strategyWeights2 = calcSimpleStrategyWeights(simple2)
    console.log('strategyWeights2:', strategyWeights2)
    const strategyWeights3 = calcSimpleStrategyWeights(simple3)
    console.log('strategyWeights3:', strategyWeights3)
    // expect(strategyWeights.get('strategy1')).toBe(0.5)
  })

  //   test('should calculate harmonic strategy weights', async () => {
  //     const strategyWeights = calcHarmonicStrategyWeights({
  //       strategyTokenWeights: [
  //         {
  //           id: 'strategy1',
  //           tokenWeights: [
  //             { token: TOKEN1, weight: 0.6 },
  //             { token: TOKEN2, weight: 0.4 },
  //           ],
  //         },
  //         {
  //           id: 'strategy2',
  //           tokenWeights: [
  //             { token: TOKEN1, weight: 0.3 },
  //             { token: TOKEN2, weight: 0.7 },
  //           ],
  //         },
  //       ],
  //       coefficients: [
  //         { token: TOKEN1, coefficient: 1 },
  //         { token: TOKEN2, coefficient: 1 },
  //       ],
  //     })

  //     // Verify that weights are calculated and normalized
  //     expect(strategyWeights.get('strategy1')).toBeDefined()
  //     expect(strategyWeights.get('strategy2')).toBeDefined()
  //     expect(strategyWeights.get('strategy1')! + strategyWeights.get('strategy2')!).toBeCloseTo(1)
  //   })

  //   test('should calculate geometric strategy weights', async () => {
  //     const strategyWeights = calcGeometricStrategyWeights({
  //       strategyTokenWeights: [
  //         {
  //           id: 'strategy1',
  //           tokenWeights: [
  //             { token: TOKEN1, weight: 0.7 },
  //             { token: TOKEN2, weight: 0.3 },
  //           ],
  //         },
  //         {
  //           id: 'strategy2',
  //           tokenWeights: [
  //             { token: TOKEN1, weight: 0.4 },
  //             { token: TOKEN2, weight: 0.6 },
  //           ],
  //         },
  //       ],
  //       coefficients: [
  //         { token: TOKEN1, coefficient: 1 },
  //         { token: TOKEN2, coefficient: 1 },
  //       ],
  //     })

  //     // Verify that weights are calculated
  //     expect(strategyWeights.get('strategy1')).toBeDefined()
  //     expect(strategyWeights.get('strategy2')).toBeDefined()
  //     expect(strategyWeights.get('strategy1')).toBeGreaterThan(0)
  //     expect(strategyWeights.get('strategy2')).toBeGreaterThan(0)
  //   })

  //   test('should handle validator coefficients in all calculation methods', async () => {
  //     const testParams = {
  //       strategyTokenWeights: [
  //         {
  //           id: 'strategy1',
  //           tokenWeights: [
  //             { token: TOKEN1, weight: 0.4 },
  //             { token: TOKEN2, weight: 0.4 },
  //           ],
  //           validatorBalanceWeight: 0.2,
  //         },
  //       ],
  //       coefficients: [
  //         { token: TOKEN1, coefficient: 1 },
  //         { token: TOKEN2, coefficient: 1 },
  //       ],
  //       validatorCoefficient: 1,
  //     }

  //     const simpleWeights = calcSimpleStrategyWeights(testParams)
  //     const harmonicWeights = calcHarmonicStrategyWeights(testParams)
  //     const geometricWeights = calcGeometricStrategyWeights(testParams)

  //     expect(simpleWeights.get('strategy1')).toBeDefined()
  //     expect(harmonicWeights.get('strategy1')).toBeDefined()
  //     expect(geometricWeights.get('strategy1')).toBeDefined()
  //   })
})
