const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: './docs-src/main',
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
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('examples'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: true
        },
        exclude: /(node_modules|dist)/
      },
      {
        test: /\.(html|tpl)$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${pkg.version}'`
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendor.bundle.js'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../docs/index.html'),
      template: path.join(__dirname, '../docs-src/index.html')
    })
  ]
}
