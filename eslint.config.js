// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,
  react: true,
  toml: false,
  rules: {
    'node/prefer-global/process': 'off',
    'ts/ban-ts-comment': 'warn',
  },
})
