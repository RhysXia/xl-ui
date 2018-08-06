const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  output: {
    filename: 'xl-vision.js'
  },
  plugins: [
    // new ExtractTextPlugin('dist/style/[name].css')
  ]
})
