'use strict'
const config = require('../config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolvePath } = require('../utils')
const slugify = require('transliteration').slugify
const striptags = require('./strip-tags')
const { cssLoaders, styleLoaders, isProduction } = require('../utils')

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

const wrap = function(render) {
  return function() {
    return render
      .apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

const webpackConfig = {
  context: config.docs.dir,
  entry: {
    app: config.docs.dir + '/src/main.js'
  },
  output: {
    path: config.docs.dist,
    filename: '[name].js',
    publicPath: isProduction() ? '/xl-vision/' : '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          preventExtract: true,
          preprocess: function(MarkdownIt, source) {
            MarkdownIt.renderer.rules.table_open = () =>  '<table class="table">'

            MarkdownIt.renderer.rules.ordered_list_open = () => '<ol class="ordered_list">'
            MarkdownIt.renderer.rules.bullet_list_open = () => '<ul class="bullet_list">'
            MarkdownIt.renderer.rules.blockquote_open = () => `<blockquote class="blockquote">`

            let defaultRender =
              md.renderer.rules.code_inline ||
              function(tokens, idx, options, env, self) {
                return self.renderToken(tokens, idx, options)
              }
            MarkdownIt.renderer.rules.code_inline = function(
              tokens,
              idx,
              options,
              env,
              self
            ) {
              var index = tokens[idx].attrIndex('class')
              if (index > -1) {
                tokens[idx].attrs[index][1] += ' code_inline'
              } else {
                tokens[idx].attrPush(['class', 'code_inline'])
              }
              return defaultRender(tokens, idx, options, env, self)
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
                    var descriptionHTML = description
                      ? md.render(description)
                      : ''

                    var jsfiddle = {
                      html: html,
                      script: script,
                      style: style
                    }
                    jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle))

                    return `<demo-block :jsfiddle="${jsfiddle}">
                            <div>${html}</div>
                            <div slot="desc">${descriptionHTML}</div>
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
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: cssLoaders({
            sourceMap: true,
            extract: isProduction()
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
        include: [
          config.src.dir,
          config.docs.dir,
          config.style.dir,
          resolvePath('node_modules/webpack-dev-server/client')
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: isProduction()
            ? '/xl-vision/img/[name].[hash:7].[ext]'
            : 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: isProduction()
            ? '/xl-vision/media/[name].[hash:7].[ext]'
            : 'static/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: isProduction()
            ? '/xl-vision/fonts/[name].[hash:7].[ext]'
            : 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ].concat(
      styleLoaders({
        sourceMap: true,
        extract: isProduction()
      })
    )
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: config.docs.dir + '/static',
        to: isProduction() ? config.docs.dist + '/static' : 'static',
        ignore: ['.*']
      }
    ])
  ]
}

if (!isProduction()) {
  webpackConfig.module.rules.push({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [config.src.dir, config.docs.dir],
    options: {
      formatter: require('eslint-friendly-formatter'),
      emitWarning: true
    }
  })
}

module.exports = webpackConfig
