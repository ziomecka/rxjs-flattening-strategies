const PORT = process.env.PORT || 5000;
const PROD_DIR = 'prod';
const DEV_DIR = 'dev';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  PORT,
  PROD_DIR,
  DEV_DIR,
  IS_PRODUCTION,
};
