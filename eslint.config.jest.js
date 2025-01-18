import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

export default [
    {
        files: ['**/*.test.js', '**/*.test.ts', '**/*.test.jsx', '**/*.test.tsx'],
        languageOptions: {
            globals: globals.jest,
        },
        plugins: {
            jest: jestPlugin,
        },
        rules: {
            ...jestPlugin.configs.recommended.rules,
        },
    },
]
