const paths = require('../paths');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const isDevMode = process.env.NODE_ENV === 'development';

const EXT_HTML = /\.html$/i;
const EXT_JSX = /\.m?jsx?$/i;
const EXT_CSS_SASS_SCSS = /\.(c|sa|sc)ss$/i;
const EXT_MODULE_CSS_SASS_SCSS = /\.module\.(c|sa|sc)ss$/i;
const EXT_STATIC_FILES = /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i;

module.exports = {
  entry: `${paths.src}/index.js`,

  output: {
    path: paths.build,
    filename: 'js/[name].[contenthash].bundle.js',
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
        test: EXT_JSX,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // CSS, SASS
      {
        test: EXT_CSS_SASS_SCSS,
        exclude: EXT_MODULE_CSS_SASS_SCSS,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: isDevMode },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      // SCSS MODULES
      {
        test: EXT_MODULE_CSS_SASS_SCSS,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: isDevMode,
              modules: { getLocalIdent: getCSSModuleLocalIdent },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      // static files
      {
        test: EXT_STATIC_FILES,
        type: 'asset',
      },
      // html files
      {
        test: EXT_HTML,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),

    new webpack.ProvidePlugin({ React: 'react' }),

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
  ],
};
