import type { StrategyWeight } from '@/types/weights'
import type { Address } from 'abitype'

interface CoefficientDefinition {
  token: Address
  coefficient: number
}

export interface WeightCalculationOptions {
  coefficients: CoefficientDefinition[]
  validatorCoefficient?: number
}

const calculateWeightTotals = (
  strategy: StrategyWeight,
  coefficients: CoefficientDefinition[],
  validatorCoefficient: number = 0,
): { totalWeight: number; totalCoefficient: number } =>
  coefficients.reduce(
    (accumulator, coefficient) => ({
      totalWeight:
        accumulator.totalWeight +
        (strategy.tokenWeights.find((tokenWeight) => tokenWeight.token === coefficient.token)
          ?.weight || 0) *
          coefficient.coefficient,
      totalCoefficient: accumulator.totalCoefficient + coefficient.coefficient,
    }),
    {
      totalWeight: (strategy.validatorBalanceWeight || 0) * validatorCoefficient,
      totalCoefficient: validatorCoefficient,
    },
  )

// const calculateHarmonicSum = (
//   strategy: StrategyWeight,
//   coefficients: CoefficientDefinition[],
//   validatorCoefficient: number,
// ): number =>
//   1 /
//   coefficients.reduce(
//     (sum, coefficient) =>
//       sum +
//       coefficient.coefficient /
//         (strategy.tokenWeights.find((tokenWeight) => tokenWeight.token === coefficient.token)
//           ?.weight || 0),
//     validatorCoefficient / (strategy.validatorBalanceWeight || 1),
//   )

const calculateWeightedLogSum = (
  strategy: StrategyWeight,
  coefficients: CoefficientDefinition[],
  validatorCoefficient: number
): { logSum: number; totalCoefficient: number } => {
  const totalCoefficient = coefficients.reduce(
    (acc, coeff) => acc + coeff.coefficient,
    0
  );
  // initialize the return value
  const weightedLogSum = {
    logSum: 0,
    totalCoefficient: totalCoefficient,
  }

  // if the validator balance weight is zero, THE ENTIRE LOG SUM is zero
  if (!strategy.validatorBalanceWeight)
    return weightedLogSum

  const tokenWeightsMap: Map<string, number> = new Map(
    coefficients.map((coeff) => [
      coeff.token,
      strategy.tokenWeights.find(
        (tokenWeight) => tokenWeight.token === coeff.token
      )?.weight || 0,
    ])
  );

  // if any of the weight is zero, THE ENTIRE LOG SUM is zero
  if (Array.from(tokenWeightsMap.values()).some((item) => item == 0))
    return weightedLogSum
  
  // because it's been assessed that all tokens' weights are present and non-zero
  // it's possible to extract them from the map, and calculate the log()
  weightedLogSum.logSum = coefficients.reduce(
    (acc, coeff) => acc + coeff.coefficient * Math.log(tokenWeightsMap.get(coeff.token)|| 0),
    validatorCoefficient * Math.log(strategy.validatorBalanceWeight)
  );

  return weightedLogSum
};

/**
 * Calculate strategy weights using arithmetic weighted average.
 * @param {StrategyWeight[]} strategyTokenWeights - Array of strategy weights to calculate from
 * @param {WeightCalculationOptions} options - Configuration containing token coefficients for weight adjustments and an optional validator coefficient
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export const calcSimpleStrategyWeights = (
  strategyTokenWeights: StrategyWeight[],
  { coefficients, validatorCoefficient = 0 }: WeightCalculationOptions,
): Map<string, number> => {
  const strategyWeights = strategyTokenWeights.reduce((weightMap, strategy) => {
    const { totalWeight, totalCoefficient } = calculateWeightTotals(
      strategy,
      coefficients,
      validatorCoefficient,
    )
    return weightMap.set(strategy.id, totalWeight / totalCoefficient)
  }, new Map<string, number>())

  return strategyWeights
}

// /**
//  * Calculate strategy weights using harmonic weighted average.
//  * @param {StrategyWeight[]} strategyTokenWeights - Array of strategy weights to calculate from
//  * @param {WeightCalculationOptions} options - Configuration containing token coefficients for weight adjustments and an optional validator coefficient
//  * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
//  */
// export const calcHarmonicStrategyWeights = (
//   strategyTokenWeights: StrategyWeight[],
//   { coefficients, validatorCoefficient = 0 }: WeightCalculationOptions,
// ): Map<string, number> => {
//   const normalizationCoefficient = strategyTokenWeights.reduce(
//     (sum, strategy) => sum + calculateHarmonicSum(strategy, coefficients, validatorCoefficient),
//     0,
//   )

//   const strategyWeights = strategyTokenWeights.reduce(
//     (weightMap, strategy) =>
//       weightMap.set(
//         strategy.id,
//         calculateHarmonicSum(strategy, coefficients, validatorCoefficient) /
//           normalizationCoefficient,
//       ),
//     new Map<string, number>(),
//   )

//   return strategyWeights
// }

/**
 * Calculate strategy weights using geometric weighted average.
 * @param {StrategyWeight[]} strategyTokenWeights - Array of strategy weights to calculate from
 * @param {WeightCalculationOptions} options - Configuration containing token coefficients for weight adjustments and an optional validator coefficient
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export const calcGeometricStrategyWeights = (
  strategyTokenWeights: StrategyWeight[],
  { coefficients, validatorCoefficient = 0 }: WeightCalculationOptions
): Map<string, number> => {
  // First calculate unnormalized weights
  const unnormalizedWeights = strategyTokenWeights.reduce(
    (weightMap, strategy) => {
      const { logSum, totalCoefficient } = calculateWeightedLogSum(
        strategy,
        coefficients,
        validatorCoefficient
      );
      // if one of the nominators is 0, we should not calculate exponential, the entire weight is zero
      const finalWeight = logSum != 0 ? Math.exp(logSum / totalCoefficient) : 0
      return weightMap.set(strategy.id, finalWeight );
    },
    new Map<string, number>()
  );

  // Calculate sum for normalization
  const weightSum = Array.from(unnormalizedWeights.values()).reduce(
    (sum, weight) => sum + weight,
    0
  );

  // Normalize weights to sum to 1
  const normalizedWeights = new Map<string, number>();
  for (const [id, weight] of unnormalizedWeights.entries()) {
    normalizedWeights.set(id, weight / weightSum);
  }

  return normalizedWeights;
};
