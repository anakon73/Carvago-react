process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: [
    '@antfu',
    'plugin:react/all',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
  },
}
