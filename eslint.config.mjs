import js from '@eslint/js'
import parser from '@typescript-eslint/parser'
import plugin from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: [
      'dist',
      '**/*.d.ts',
      'node_modules',
      '/dist',
      '/pnpm-lock.yaml',
      '.DS_Store',
      'vitest.config.ts',
      '**/*.md',
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
      'unused-imports': (await import('eslint-plugin-unused-imports')).default,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
        },
      ],
      'unused-imports/no-unused-imports': 'warn',
    },
  },
  prettier,
]
