const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const striptags = require('./strip-tags')
const slugify = require('transliteration').slugify

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}


const md = require('markdown-it')()

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(
      parseInt(
        encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'),
        16
      )
    )
  })
  return str
}

var wrap = function(render) {
  return function() {
    return render
      .apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: './docs-src/main',
    verdors: ['vue', 'vue-router']
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
        loader: 'vue-markdown-loader',
        options: {
          preprocess: function(MarkdownIt, source) {
            MarkdownIt.renderer.rules.table_open = function() {
              return '<table class="table">'
            }
            MarkdownIt.renderer.rules.fence = wrap(
              MarkdownIt.renderer.rules.fence
            )
            return source
          },
          use: [
            [
              require('markdown-it-anchor'),
              {
                level: 2,
                slugify: slugify,
                permalink: true,
                permalinkBefore: true
              }
            ],
            [
              require('markdown-it-container'),
              'demo',
              {
                validate: function(params) {
                  return params.trim().match(/^demo\s*(.*)$/)
                },

                render: function(tokens, idx) {
                  var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                  if (tokens[idx].nesting === 1) {
                    var description = m && m.length > 1 ? m[1] : ''
                    var content = tokens[idx + 1].content
                    var html = convert(
                      striptags.strip(content, ['script', 'style'])
                    ).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                    var script = striptags.fetch(content, 'script')
                    var style = striptags.fetch(content, 'style')
                    var jsfiddle = { html: html, script: script, style: style }
                    var descriptionHTML = description
                      ? md.render(description)
                      : ''

                    jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle))

                    return `<demo-block :jsfiddle="${jsfiddle}">
                            ${html}
                            <div slot='desc'>${descriptionHTML}</div>
                            <div slot="source">`
                  }
                  return '</div></demo-block>\n'
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('docs-src')],
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
