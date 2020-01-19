const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { DEV_DIR, IS_PRODUCTION, PROD_DIR } = require('./consts');

const plugins = [
  (IS_PRODUCTION && PROD_DIR !== '') || (!IS_PRODUCTION && DEV_DIR !== '')
    ? new CleanWebpackPlugin()
    : undefined,
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
];

module.exports = {
  MiniCssExtractPlugin,
  plugins,
};
