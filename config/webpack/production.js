'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const common = require('./common');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: ImageminPlugin } = require('imagemin-webpack-plugin');

const EXT_IMAGES = /\.(jpe?g|png|gif|svg)$/i;

module.exports = merge(common, {
  mode: 'production',

  output: {
    publicPath: './',
  },

  target: 'browserslist',

  devtool: false,

  plugins: [
    new ImageminPlugin({ test: EXT_IMAGES }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
  ],

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [`...`, new CssMinimizerPlugin()],
  },

  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
