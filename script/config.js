const {
  resolvePath
} = require('./utils')

module.exports = {
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
      dir: resolvePath('style')
  }
}
