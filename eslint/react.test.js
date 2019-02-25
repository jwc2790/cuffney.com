'use strict';

module.exports = {
  extends: './react.js',

  env: {
    mocha: true,
    jest: true,
  },

  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    'no-console': [0],
    'max-statements': [1, 50],
  },

};