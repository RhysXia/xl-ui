const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.conf.js')
const config = require('../config')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  output: {
    filename: 'xl-vision.js'
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [config.src.dir],
      options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: true
      },
      exclude: /node_modules/
    }]
  },
  plugins: [
    // new ExtractTextPlugin('dist/style/[name].css')
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
})
