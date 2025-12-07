import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylexlint from '@stylexjs/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    plugins: {
      '@stylexjs': stylexlint,
    },
    rules: {
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/enforce-extension': 'error',
      '@stylexjs/no-legacy-contextual-styles': 'error',
      '@stylexjs/no-nonstandard-styles': 'error',
      '@stylexjs/valid-shorthands': 'warn',
      '@stylexjs/no-unused': 'warn',
      '@stylexjs/sort-keys': 'off', // I find the enforced sort order illogical
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
  },
])
