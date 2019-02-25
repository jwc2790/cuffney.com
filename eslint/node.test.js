'use strict';

module.exports = {
  extends: './node.js',

  env: {
    mocha: true,
  },

  rules: {
    'max-statements': [1, 50],
    'no-console': [0],
    'no-underscore-dangle': [0],
    'prefer-arrow-callback': [0],
  },
};
