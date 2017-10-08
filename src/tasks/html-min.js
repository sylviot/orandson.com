const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')

const paths = require('./paths')

const options = {
  collapseWhitespace: true,
  removeComments: true
}

module.exports = () => {
  return gulp.src(`${paths.dest}/**/*.html`)
    .pipe(htmlmin(options))
    .pipe(gulp.dest(paths.dest))
}
