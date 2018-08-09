const {
  resolvePath
} = require('./utils')

const config = {
  src: {
    dir: resolvePath('src'),
    dist: resolvePath('dist'),
    publicPath: '/dist'

  },
  docs: {
    dir: resolvePath('docs'),
    dist: resolvePath('docs-dist')
  },
  style: {
    dir: resolvePath('styles')
  }
}
config.alias = {
  vue$: 'vue/dist/vue.esm.js',
  '@': config.src.dir,
  '@docs': config.docs.dir + '/src',
  '@style': config.style.dir + '/theme-default/'
}

module.exports = config
