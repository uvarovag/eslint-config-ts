import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

import { transformGlobals } from './utils/transformGlobals.js'

export default [
    {
        files: ['**/*.test.js', '**/*.test.ts', '**/*.test.jsx', '**/*.test.tsx'],
        languageOptions: {
            globals: {
                ...transformGlobals(globals.jest),
            },
        },
        plugins: {
            jest: jestPlugin,
        },
        rules: {
            ...jestPlugin.configs.recommended.rules,
        },
    },
]
