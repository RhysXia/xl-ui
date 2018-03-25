const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.dist.base.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const utils = require('./utils')

module.exports = merge(webpackBaseConfig, {
  output: {
    filename: 'xl-vision.js'
  },
  plugins: [
    new ExtractTextPlugin('style/xl-vision.css')
  ]
})
