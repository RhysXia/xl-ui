const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const CompressionPlugin = require('compression-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  output: {
    filename: 'xl-vision.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      parallel: true,
      sourceMap: true
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js)$/,
      threshold: 10240,
      minRatio: 0.8
    })
    // ,
    // new ExtractTextPlugin({
    //   filename: 'dist/style/[name].css',
    //   allChunks: true
    // }),
    // new OptimizeCSSPlugin({
    //   cssProcessorOptions: {
    //     safe: true,
    //     map: {
    //       inline: false
    //     }
    //   }
    // })
  ]
})
