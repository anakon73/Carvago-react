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
    'react/button-has-type': [0, {
      button: false,
      submit: false,
      reset: false,
    }],
    'react/jsx-props-no-spreading': [0, {
      html: 'ignore' | 'enforce',
      custom: 'ignore' | 'enforce',
      explicitSpread: 'ignore' | 'enforce',
    }],
    'react/require-default-props': [0, {
      forbidDefaultForRequired: false,
      classes: 'defaultProps' | 'ignore',
      functions: 'defaultProps' | 'defaultArguments' | 'ignore',
    }],
    'react/function-component-definition': [0, {
      namedComponents:
       'function-declaration'
       | 'function-expression' | 'arrow-function'
        | 'function-declaration' | 'function-expression' | 'arrow-function',
      unnamedComponents:
      'function-expression' | 'arrow-function'
       | 'function-expression' | 'arrow-function',
    }],
    'max-len': 'error',
    '@typescript-eslint/no-redeclare': 'off',
  },
  overrides: [{
    files: ['*.ts', '*.tsx', '*.js'],
    parser: '@typescript-eslint/parser',
  }],
}
