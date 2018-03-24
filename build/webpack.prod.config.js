const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const utils = require('./utils')

module.exports = merge(webpackBaseConfig, {
  devtool: 'eval-source-map',
  entry: {
    main: './docs/main',
    verdors: [
      'vue',
      'vue-router'
    ]
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
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
          extract: true,
          usePostCSS:true
        })
      }
    }].concat(
      utils.styleLoaders({
        extract: true,
        usePostCSS: true
      })
    )
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendor.bundle.js'
    }),
    new ExtractTextPlugin('/style/docs.min.css'),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../docs/dist/index.html'),
      template: path.join(__dirname, '../docs/index.html')
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        map: {
          inline: false
        }
      }
    })
  ]
})
