const { MiniCssExtractPlugin } = require('./plugins');

const rules = [
  {
    test: /\.ts$/,
    use: [
      'ts-loader',
    ],
  },
  {
    test: /\.sass$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
];

module.exports = rules;
