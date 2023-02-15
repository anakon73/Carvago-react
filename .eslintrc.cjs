process.env.ESLINT_TSCONFIG = 'tsconfig.json'
module.exports = {
  extends: [
    '@antfu',
    'plugin:react/all',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
    'plugin:react-query/recommended',
    './.eslintrc-auto-import.json',
  ],
  plugins: ['react', 'react-query'],
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.ts', '.tsx'],
    }],
    'react/jsx-no-literals': [0, {
      noStrings: true,
      allowedStrings: ['allowed'],
      ignoreProps: false,
      noAttributeStrings: true,
    }],
    'react/forbid-component-props': [0, { forbid: ['false'] }],
    'react/jsx-no-bind': [0, { allowArrowFunctions: true }],
  },
  overrides: [{
    files: ['*.ts', '*.tsx', '*.js'],
    parser: '@typescript-eslint/parser',
  }],
}
