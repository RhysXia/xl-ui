const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.dist.base.config.js');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const utils = require('./utils')

module.exports = merge(webpackBaseConfig, {
  output: {
    filename: 'xl-vision.min.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new ExtractTextPlugin('style/xl-vision.min.css'),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        map: {
          inline: false
        }
      }
    })
  ]
});
