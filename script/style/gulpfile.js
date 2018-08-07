const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const config = require('../config')
const {
  getSubDirs,
  rmdirSync
} = require('../utils')

const dirs = getSubDirs(config.style.dir)

dirs.forEach(dir => {
  rmdirSync(dir + '/lib')
})

// 编译scss
gulp.task('css', function () {
  dirs.forEach(dir => {
    gulp
      .src(dir + '/src/*.scss')
      .pipe(sass())
      .on('error', error => {
        console.error(error.toString())
        this.emit('end')
      })
      .pipe(postcss())
      .pipe(gulp.dest(dir + '/lib'))
  })
})

gulp.task('minCss', function () {
  dirs.forEach(dir => {
    gulp
      .src(dir + '/src/*.scss')
      .pipe(sass())
      .pipe(postcss())
      .pipe(cleanCSS())
      .pipe(
        rename(path => {
          path.basename += '.min'
        })
      )
      .pipe(gulp.dest(dir + '/lib'))
  })
})

// 拷贝字体文件
gulp.task('fonts', function () {
  dirs.forEach(dir => {
    gulp.src(dir + '/src/commons/ionicons/fonts/*').pipe(gulp.dest(dir + '/lib/fonts'))
  })
})
gulp.task('watch', function () {
  const arr = dirs.map(dir => dir + '/src/**/*.scss')
  gulp.watch(arr, ['css'])
})

gulp.task('prod', ['css', 'minCss', 'fonts'])

gulp.task('dev', ['css', 'fonts', 'watch'])
