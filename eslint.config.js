import base from './eslint.config.base.js'
import jest from './eslint.config.jest.js'

export const baseConfig = base
export const jestConfig = jest

export default [...baseConfig, ...jestConfig]
