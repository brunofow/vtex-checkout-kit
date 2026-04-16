import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.{ts,tsx}'],

    ignores: [
      'node_modules/**',
      'coverage/**',
      '*.snap.ts',
      'checkout-ui-custom/**',
    ],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        metrics: 'readonly',
      },
    },

    plugins: {
      '@typescript-eslint': ts,
    },

    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      'require-atomic-updates': 'off',
    },
  },
]
