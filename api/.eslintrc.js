module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'global-require': 0,
    'arrow-body-style': 0,
    'prefer-destructuring': 0,
    'linebreak-style': 0,
    // we only want single quotes
    quotes: ['error', 'single'],
    // we want to force semicolons
    semi: ['error', 'always'],
    // we use 2 spaces to indent our code
    indent: ['error', 2, { SwitchCase: 1 }],
    // we want to avoid useless spaces
    'no-multi-spaces': ['error'],
    'max-len': ['error', {
      code: 100,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'no-param-reassign': ['error', { props: false }],
    radix: ['error', 'as-needed'],
  },
};
