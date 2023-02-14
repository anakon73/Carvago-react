process.env.ESLINT_TSCONFIG = 'tsconfig.json'
module.exports = {
  extends: ['@antfu', 'plugin:react/all', 'plugin:react/jsx-runtime', 'plugin:tailwindcss/recommended', 'plugin:tailwindcss/recommended', 'plugin:storybook/recommended'],
  plugins: ['react'],
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
    'react/forbid-component-props': [1, { forbid: ['false'] }],
  },
  overrides: [{
    files: ['*.ts', '*.tsx', '*.js'],
    parser: '@typescript-eslint/parser',
  }],
}
