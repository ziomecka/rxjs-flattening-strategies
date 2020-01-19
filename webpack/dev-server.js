const path = require('path');

const { DEV_DIR, PORT } = require('./consts');

module.exports = {
  filename: 'bundle.js',
  contentBase: path.resolve(__dirname, '../', DEV_DIR),
  port: PORT,
  // hot: true,
  watchContentBase: true,
  // liveReload: true,
  writeToDisk: true,
};
