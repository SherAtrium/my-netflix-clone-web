const paths = require('../paths');
const { merge } = require('webpack-merge');
const common = require('./common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(common, {
  mode: 'production',

  entry: {
    index: {
      import: `${paths.src}/index.js`,
      dependOn: ['react'],
    },
    react: ['react', 'react-dom', 'prop-types'],
  },

  devtool: false,

  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: './',
  },

  module: {
    rules: [
      // CSS, SASS
      {
        test: /\.(c|sa|sc)ss$/i,
        exclude: /\.module\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: false },
          },
          'sass-loader',
        ],
      },
      // SCSS MODULES
      {
        test: /\.module\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: { localIdentName: '[name]-[local]-[hash:base64:3]' },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].css',
    }),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
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
      },
    },
  },

  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
