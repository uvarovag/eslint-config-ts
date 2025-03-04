# eslint-config-ts

Shared ESLint 9 Flat configuration for TypeScript projects.

## Installation

To use this configuration in your project, install the required dependencies:

```bash
npm install --save-dev @uvarovag/eslint-config-ts eslint@^9.20.1
```

## Usage

### Step 1: Create a `eslint.config.mjs` file

```js
import tsConfig from '@uvarovag/eslint-config-ts'

export default [...tsConfig]
```

### Step 2: Run ESLint

```bash
eslint '**/*.{js,jsx,ts,tsx}' --fix
```

## Use together with Prettier

## Installation

To use this configuration in your project, install the necessary dependencies:

```bash
npm install --save-dev @uvarovag/prettier-config prettier
```

### Step 1: Create a `.prettierrc` file

```json
"@uvarovag/prettier-config"
```

### Step 2: Format your code

```bash
prettier --write '**/*.{ts,tsx,js,json,css,html,md}'
```

## Use Prettier and ESLint in Visual Studio Code

### Step 1: Install Plugins

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Step 2: Add the following to settings.json in VSCode

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.requireConfig": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    "eslint.experimental.useFlatConfig": true
}
```
