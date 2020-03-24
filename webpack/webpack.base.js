const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const DIST_DIR = path.join(__dirname, '../public');
const SRC_DIR = './src';
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((accumulator, current) => {
  accumulator[`process.env.${current}`] = JSON.stringify(env[current]);
  return accumulator;
}, {});

module.exports = {
  entry: [`${SRC_DIR}/index.js`],
  output: {
    path: DIST_DIR,
    filename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.svg'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      Ui: path.resolve(__dirname, '../src', 'components/ui/'),
      Styles: path.resolve(__dirname, '../src', 'styles/'),
      Helpers: path.resolve(__dirname, '../src', 'components/helpers/'),
      Pages: path.resolve(__dirname, '../src', 'components/pages/'),
      Layouts: path.resolve(__dirname, '../src', 'components/layouts/'),
      Services: path.resolve(__dirname, '../src', 'services/'),
      Store: path.resolve(__dirname, '../src', 'store/'),
      Lib: path.resolve(__dirname, '../src', 'lib/'),
      Utils: path.resolve(__dirname, '../src', 'utils/'),
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      inject: 'body',
    }),
    new webpack.DefinePlugin(envKeys),
  ],
  module: {
    rules: [
      { test: /\.js?$|.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
