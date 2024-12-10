import jsConfig from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import unicornPlugin from 'eslint-plugin-unicorn'
import globals from 'globals'

import { transformGlobals } from './utils/transformGlobals.js'

export default [
    jsConfig.configs.recommended,
    prettierConfig,
    {
        files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            sourceType: 'module',
            ecmaVersion: 'latest',
            globals: {
                ...transformGlobals(globals.browser),
                IS_DEV: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin,
            import: importPlugin,
            unicorn: unicornPlugin,
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'import/order': [
                'error',
                {
                    groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling'], ['type']],
                    pathGroups: [
                        {
                            pattern: '{react,react-dom/**}',
                            group: 'external',
                            position: 'before',
                        },
                    ],
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    'newlines-between': 'always',
                },
            ],
        },
    },
    {
        files: ['webpack.config.ts'],
        languageOptions: {
            globals: {
                ...transformGlobals(globals.node),
            },
        },
    },
    {
        ignores: ['node_modules/**', 'dist/**'],
    },
]
