const webpack = require('webpack');
const path = require('path');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const common = require('./webpack.base.js');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new ErrorOverlayPlugin(),
];

module.exports = common({
  mode: 'development',
  devtool: 'source-map',
  plugins,
  devServer: {
    hot: true,
    port: 4001,
    stats: 'errors-only',
    disableHostCheck: true,
    contentBase: path.join(__dirname, '..'),
  },
});
