const path = require('path');
const getWebpackEntry = require('./lib/getWebpackEntry');
const getHtmlWebpackPluginList = require('./lib/getHtmlWebpackPluginList');

module.exports = {
  entry: getWebpackEntry(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [].concat(getHtmlWebpackPluginList()),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  performance: {
    hints: false,
  },
};
