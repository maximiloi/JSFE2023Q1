const { merge } = require('webpack-merge');
const { config } = require('./webpack.base');

module.exports = merge(config, {
  mode: 'production',
  devtool: false,
  optimization: { minimize: true, splitChunks: { chunks: 'all' } },
  performance: { maxEntrypointSize: 512000, maxAssetSize: 512000 },
});