const paths = require('../paths');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: `${paths.src}/index.js`,

  output: {
    path: paths.build,
    filename: 'js/[name].[contenthash].js',
    publicPath: '/',
    clean: true,
    crossOriginLoading: 'anonymous',
    module: true,
    environment: {
      arrowFunction: true,
      bigIntLiteral: false,
      const: true,
      destructuring: true,
      dynamicImport: false,
      forOf: true,
    },
  },

  experiments: {
    topLevelAwait: true,
    outputModule: true,
  },

  resolve: {
    alias: {
      '@': paths.src,
    },
    extensions: ['.mjs', '.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      // JavaScript, React
      {
        test: /\.m?jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // CSS, SASS
      {
        test: /\.(c|sa|sc)ss$/i,
        exclude: /\.module\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
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
              sourceMap: true,
              modules: { localIdentName: '[name]-[local]-[hash:base64:3]' },
            },
          },
          'sass-loader',
        ],
      },
      // static files
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
        type: 'asset',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].css',
    }),

    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
      filename: 'index.html',
      scriptLoading: 'blocking',
      inject: 'body',
      minify: true,
      hash: true,
      templateParameters: {
        analytics: 'Google Analytics ID',
        author: 'Sherzod_Mamatmurodov',
        publishedDate: '9/18/2021',
        description: 'ReactJS Movies App',
        keywords: 'JS, React, Webpack, Movies',
        title: 'ReactJS - Movies',
        url: 'https://example.com',
      },
    }),

    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
