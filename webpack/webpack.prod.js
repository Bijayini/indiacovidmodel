const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.base.js');

const goEnvName = process.env.GO_ENVIRONMENT_NAME;
const enableDevMode = goEnvName === 'Build';
const mode = enableDevMode ? 'development' : 'production';

console.log(
  `LOG: Building application in ${mode} mode because Go env is`,
  goEnvName,
);

const plugins = [new webpack.HashedModuleIdsPlugin(), new CleanWebpackPlugin()];

module.exports = common({
  mode,
  plugins,
  devtool: enableDevMode ? 'source-map' : 'none',
});
