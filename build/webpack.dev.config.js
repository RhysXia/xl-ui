const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const utils = require('./utils')

module.exports = merge(webpackBaseConfig, {
  devtool: 'eval-source-map',
  entry: {
    main: './docs/src/main',
    verdors: [
      'vue',
      'vue-router'
    ]
  },
  output: {
    path: path.join(__dirname, '../docs'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [{
      test:/\.md$/,
      loader:'vue-markdown-loader'
    },{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: utils.cssLoaders({
          extract: false,
          usePostCSS:true
        })
      }
    }].concat(
      utils.styleLoaders({
        usePostCSS: true
      })
    )
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendor.bundle.js'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../docs/index.html'),
      template: path.join(__dirname, '../docs/src/index.html')
    }),
    new FriendlyErrorsPlugin()
  ]

})
