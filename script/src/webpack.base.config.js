const webpack = require('webpack')
const {
  resolvePath,
  cssLoaders,
  styleLoaders
} = require('../utils')


module.exports = {
  devtool: 'source-map',
  entry: {
    main: resolvePath('src/index.js')
  },
  output: {
    path: resolvePath('dist'),
    publicPath: '/dist',
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
      vue: 'vue/dist/vue.esm.js',
      '@': resolvePath('src')
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
