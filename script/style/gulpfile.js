const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const { resolvePath } = require('../utils')
const fs = require('fs')
const basePath = resolvePath('styles')

function getSubDirs(path) {
  const dir = []
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)
    files.forEach(function (file, index) {
      var curPath = path + '/' + file
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        dir.push(curPath)
      }
    })
  }
  return dir
}

const dirs = getSubDirs(basePath)

// 编译scss
gulp.task('css', function () {
  dirs.forEach(dir => {
    gulp
      .src(dir + '/src/*.scss')
      .pipe(sass())
      .pipe(postcss())
      .pipe(gulp.dest('./lib'))
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
      .pipe(gulp.dest('./lib'))
  })
})

// 拷贝字体文件
gulp.task('fonts', function () {
  dirs.forEach(dir => {
    gulp.src(dir + '/src/commons/ionicons/fonts/*').pipe(gulp.dest('./lib/fonts'))
  })
})

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['css'])
})

gulp.task('build', ['css', 'minCss', 'fonts'])

gulp.task('dev', ['css', 'fonts', 'watch'])
