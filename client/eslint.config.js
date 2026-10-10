import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // ESLint's core rule does not recognise lowercase JSX namespaces such as
      // <motion.div>. Keep those imports lintable without hiding other unused
      // lowercase variables, and account for component/icon render props.
      'no-unused-vars': ['error', {
        varsIgnorePattern: '^(motion|[A-Z_])',
        argsIgnorePattern: '^[A-Z_]',
      }],
    },
  },
  {
    files: [
      'src/shared/components/scroll/SmoothScroll.jsx',
      'src/shared/components/ui/button.jsx',
      'src/shared/components/ui/form.jsx',
    ],
    rules: {
      // These modules intentionally export a component together with a helper.
      'react-refresh/only-export-components': 'off',
    },
  },
])
