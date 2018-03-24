const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const utils = require('./utils')

module.exports = merge(webpackBaseConfig, {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            extract: true,
            usePostCSS: true
          })
        }
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        loader:
          'url-loader?limit=8192&name=[name].[ext]&outputPath=assets/&publicPath=../assets/'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader:
          'url-loader?limit=8192&&name=[name].[ext]&outputPath=style/fonts/&publicPath=fonts/'
      }
    ].concat(
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
      sourceMap: true
    }),
    new ExtractTextPlugin('style/docs.css'),
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
