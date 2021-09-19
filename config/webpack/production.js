const paths = require('../paths');
const common = require('./common');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',

  target: 'browserslist',

  devtool: false,

  entry: {
    index: {
      import: `${paths.src}/index.js`,
      dependOn: ['react'],
    },
    react: ['react', 'react-dom', 'prop-types'],
  },

  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: './',
  },

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
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },

  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
