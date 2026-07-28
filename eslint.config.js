import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import stylistic from '@stylistic/eslint-plugin';

export default [
   {
      ignores: [
         '**/dist/**',
         '**/build/**',
         '**/node_modules/**',
         '**/auth_info_baileys/**',
      ],
   },

   {
      plugins: {
         '@stylistic': stylistic,
      },
      rules: {
         '@stylistic/semi': ['error', 'always'],
         '@stylistic/indent': ['error', 3],
         '@stylistic/padded-blocks': ['error', 'always'],
      },
   },

   {
      files: ['backend/**/*.js', 'whatsapp/**/*.js', '*.js'],
      languageOptions: {
         ecmaVersion: 'latest',
         sourceType: 'module',
         globals: {
            ...globals.node,
         },
      },
      rules: {
         ...js.configs.recommended.rules,
         'no-unused-vars': 'warn',
         'no-console': 'off',
      },
   },

   {
      files: ['frontend/**/*.{js,jsx}'],
      plugins: {
         'react-hooks': reactHooks,
         'react-refresh': reactRefresh,
      },
      languageOptions: {
         ecmaVersion: 'latest',
         sourceType: 'module',
         globals: {
            ...globals.browser,
         },
         parserOptions: {
            ecmaFeatures: { jsx: true },
         },
      },
      rules: {
         ...js.configs.recommended.rules,
         ...reactHooks.configs.recommended.rules,
         'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
         'no-unused-vars': 'warn',
      },
   },
];