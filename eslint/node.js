'use strict';

module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  globals: { },
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    // ES6
    ecmaVersion: 6,
    sourceType: 'script',
    ecmaFeatures: { },
  },
  rules: {
    'no-console': [1],
  },
};
