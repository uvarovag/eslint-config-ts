import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

export default [
    {
        files: ['**/*.test.{js,ts,jsx,tsx}'],
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
