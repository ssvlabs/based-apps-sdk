import { StrategyWeight } from '../../types/weights';
import { Address } from 'abitype';
interface CoefficientDefinition {
    token: Address;
    coefficient: number;
}
export interface WeightCalculationOptions {
    coefficients: CoefficientDefinition[];
    validatorCoefficient?: number;
}
/**
 * Calculate strategy weights using arithmetic weighted average.
 * @param {StrategyWeight[]} strategyTokenWeights - Array of strategy weights to calculate from
 * @param {WeightCalculationOptions} options - Configuration containing token coefficients for weight adjustments and an optional validator coefficient
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export declare const calcArithmeticStrategyWeights: (strategyTokenWeights: StrategyWeight[], { coefficients, validatorCoefficient }: WeightCalculationOptions) => Map<string, number>;
/**
 * Calculate strategy weights using harmonic weighted average.
 * @param {StrategyWeight[]} strategyTokenWeights - Array of strategy weights to calculate from
 * @param {WeightCalculationOptions} options - Configuration containing token coefficients for weight adjustments and an optional validator coefficient
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export declare const calcHarmonicStrategyWeights: (strategyTokenWeights: StrategyWeight[], { coefficients, validatorCoefficient }: WeightCalculationOptions) => Map<string, number>;
/**
 * Calculate strategy weights using geometric weighted average.
 * @param {StrategyWeight[]} strategyTokenWeights - Array of strategy weights to calculate from
 * @param {WeightCalculationOptions} options - Configuration containing token coefficients for weight adjustments and an optional validator coefficient
 * @returns {Map<string, number>} - Map of strategy IDs to their calculated weights.
 */
export declare const calcGeometricStrategyWeights: (strategyTokenWeights: StrategyWeight[], { coefficients, validatorCoefficient }: WeightCalculationOptions) => Map<string, number>;
export {};
