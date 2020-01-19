const path = require('path');

const { IS_PRODUCTION, PROD_DIR, DEV_DIR } = require('./consts');
const devServer = require('./dev-server');
const { plugins } = require('./plugins');
const rules = require('./rules');

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  entry: './src/scripts/index.ts',
  devtool: IS_PRODUCTION ? false : 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(
      __dirname,
      '../',
      IS_PRODUCTION ? PROD_DIR : DEV_DIR,
    ),
  },
  devServer,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.sass'],
  },
  module: { rules },
  plugins,
};
