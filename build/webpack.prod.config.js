const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const utils = require('./utils')
const path = require('path')

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
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      parallel: true,
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: 'style/docs.[hash].css',
      allChunks: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        map: {
          inline: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../docs/index.html'),
      template: path.join(__dirname, '../docs-src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
    new CleanWebpackPlugin(
      ['docs/*'], //匹配删除的文件
      {
        root: path.resolve(__dirname, '..'), //根目录
        verbose: true, //开启在控制台输出信息
        dry: false //启用删除文件
      }
    )
  ]
})
