const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const {
  resolvePath
} = require('../utils')
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
      include: [resolvePath('src')],
      options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: true
      },
      exclude: /node_modules/
    }]
  },
  plugins: [
    // new ExtractTextPlugin('dist/style/[name].css')
  ]
})
