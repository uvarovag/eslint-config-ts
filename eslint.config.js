import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys'
import unicornPlugin from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        extends: [eslint.configs.recommended, tseslint.configs.recommended, prettierConfig],
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            import: importPlugin,
            prettier: prettierPlugin,
            'sort-destructure-keys': sortDestructureKeysPlugin,
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
            ...unicornPlugin.configs.recommended.rules,
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                },
            ],
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
            'sort-destructure-keys/sort-destructure-keys': 'error',
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        camelCase: true,
                        pascalCase: true,
                    },
                },
            ],
            'unicorn/prevent-abbreviations': 'off',
        },
    },
    {
        files: ['**/*[sS]tore*.{js,ts}'],
        rules: {
            'unicorn/prefer-spread': 'off',
        },
    },
    {
        files: ['**/*.test.*'],
        rules: {
            'unicorn/*': 'off',
        },
    },
    {
        files: ['{webpack,vite}.config.{js,ts,cjs,cts,mjs,mts}'],
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            'unicorn/no-anonymous-default-export': 'off',
        },
    },
    {
        ignores: ['node_modules', 'dist'],
    }
)
