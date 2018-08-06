const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const {
  resolvePath,
  getSubDirs
} = require('../utils')
const basePath = resolvePath('styles')

const dirs = getSubDirs(basePath)
// 编译scss
gulp.task('css', function () {
  dirs.forEach(dir => {
    gulp
      .src(dir + '/src/*.scss')
      .pipe(sass())
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
  dirs.forEach(dir => {
    gulp.watch(dir + '/src/**/*.scss', ['css'])
  })
})

gulp.task('prod', ['css', 'minCss', 'fonts'])

gulp.task('dev', ['css', 'fonts', 'watch'])