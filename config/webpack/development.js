'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const paths = require('../paths');
const common = require('./common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',

  target: 'web',

  devtool: 'eval-cheap-source-map',

  module: {
    rules: [],
  },

  devServer: {
    static: {
      directory: paths.build,
    },

    client: {
      logging: 'none',
    },

    compress: true,
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
});
