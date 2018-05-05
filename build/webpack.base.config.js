const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
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
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
        // ,
        // options: {
        //   loaders: utils.cssLoaders({
        //     sourceMap: true,
        //     usePostCSS: true,
        //     extract: true
        //   })
        // }
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: false
        },
        exclude: /(node_modules|dist)/
      }
      // ,
      // {
      //   test: /\.(gif|jpg|png)\??.*$/,
      //   loader: 'url-loader?limit=8192&&name=assets/[name].[ext]'
      // },
      // {
      //   test: /\.(woff|svg|eot|ttf)\??.*$/,
      //   loader: 'url-loader?limit=8192&&name=style/fonts/[name].[ext]'
      // },
      // {
      //   test: /\.(html|tpl)$/,
      //   loader: 'html-loader'
      // }
    ]
    // .concat(
    //   utils.styleLoaders({
    //     sourceMap: false,
    //     usePostCSS: true,
    //     extract: true
    //   })
    // )
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        VERSION: `'${pkg.version}'`
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
