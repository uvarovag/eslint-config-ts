import vitest from '@vitest/eslint-plugin'
import globals from 'globals'

export default [
    {
        files: ['**/*.test.{js,ts,jsx,tsx}'],
        languageOptions: {
            globals: globals.vitest,
        },
        plugins: {
            vitest,
        },
        rules: {
            ...vitest.configs.recommended.rules,
        },
    },
]
