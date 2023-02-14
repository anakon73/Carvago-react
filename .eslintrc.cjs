process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: [
    '@antfu',
    'plugin:react/all',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-no-literals': [0, { noStrings: true, allowedStrings: ['allowed'], ignoreProps: false, noAttributeStrings: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
