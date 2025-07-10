export declare const utils: {
    calcArithmeticStrategyWeights: (strategyTokenWeights: import('../../types/weights').StrategyWeight[], { coefficients, validatorCoefficient }: import('./weights-calculations').WeightCalculationOptions) => Map<string, number>;
    calcGeometricStrategyWeights: (strategyTokenWeights: import('../../types/weights').StrategyWeight[], { coefficients, validatorCoefficient }: import('./weights-calculations').WeightCalculationOptions) => Map<string, number>;
    calcHarmonicStrategyWeights: (strategyTokenWeights: import('../../types/weights').StrategyWeight[], { coefficients, validatorCoefficient }: import('./weights-calculations').WeightCalculationOptions) => Map<string, number>;
};
