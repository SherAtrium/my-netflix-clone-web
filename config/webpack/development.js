'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const paths = require('../paths');
const common = require('./common');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',

  output: {
    publicPath: '/',
  },

  target: 'web',

  devtool: 'eval-cheap-source-map',

  module: {
    rules: [],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

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
