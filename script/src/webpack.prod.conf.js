const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf.js')
const CompressionPlugin = require('compression-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const config = merge(webpackBaseConfig, {
  output: {
    filename: 'xl-vision.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          // 删除所有的 `console` 语句
          // 还可以兼容ie浏览器
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true
        }
      },
      parallel: true,
      sourceMap: true,
      comments: false,
      beautify: false
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
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

// if(process.env.analyze){
//   const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//   config.plugins.push(new BundleAnalyzerPlugin())
// }

module.exports = config