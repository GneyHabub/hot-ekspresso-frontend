module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'new-cap': 0,
    'no-unused-vars': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.spec.ts', '**/*.spec.tsx'] }],
    'react/require-default-props': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  globals: {
    cy: true,
  },
};
