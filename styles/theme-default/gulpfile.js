const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')

// 编译scss
gulp.task('css', function() {
  gulp
    .src('./src/*.scss')
    .pipe(sass())
    .pipe(postcss())
    .pipe(gulp.dest('./lib'))
})

gulp.task('minCss', function() {
  gulp
    .src('./src/*.scss')
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

// 拷贝字体文件
gulp.task('fonts', function() {
  gulp.src('./src/commons/ionicons/fonts/*').pipe(gulp.dest('./lib/fonts'))
})

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', ['css'])
})

gulp.task('build', ['css', 'minCss', 'fonts'])

gulp.task('dev', ['css', 'fonts', 'watch'])
