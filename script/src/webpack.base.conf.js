const webpack = require('webpack')
const config = require('../config')
const {
  cssLoaders,
  styleLoaders,
  rmdirSync
} = require('../utils')

rmdirSync(config.src.dist)

const webpackConfig = {
  devtool: 'source-map',
  entry: {
    main: config.src.dir + '/index.js'
  },
  output: {
    path: config.src.dist,
    publicPath: config.src.publicPath,
    library: 'xl-vision',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': config.src.dir
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: cssLoaders({
          sourceMap: true,
          extract: true
        }),
        cssSourceMap: true,
        cacheBusting: true,
        transformToRequire: {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: 'xlink:href'
        }
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }
    ].concat(styleLoaders({
      sourceMap: true,
      extract: true,
      usePostCSS: true
    }))
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}

module.exports = webpackConfig
