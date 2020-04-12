const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(process.cwd(), 'src', 'index.html'),
  }),
  new CopyPlugin([{ from: 'static', to: 'static' }]),
];

const fileName = mode =>
  mode === 'development' ? '[name].[hash].js' : '[name].[contenthash:8].js';

module.exports = options => ({
  entry: [path.join(process.cwd(), './src/index.js')],
  mode: options.mode,
  output: {
    filename: `static/${fileName(options.mode)}`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        sideEffects: true,
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
  devServer: options.devServer,
  devtool: options.devtool,
  plugins: options.plugins.concat(plugins),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
});
