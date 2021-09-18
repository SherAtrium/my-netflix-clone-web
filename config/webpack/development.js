const paths = require('../paths');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: {
      directory: paths.build,
    },
    client: {
      logging: 'none',
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
