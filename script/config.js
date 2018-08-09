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

module.exports = config
