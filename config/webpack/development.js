const paths = require('../paths');
const common = require('./common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  
  target: 'web',
  
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
});
