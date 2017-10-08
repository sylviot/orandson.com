const gulp = require('gulp')
const eslint = require('gulp-eslint')
const argv = require('yargs').argv

const paths = require('./paths')

module.exports = () => {
  if (argv.ci) {
    return gulp.src(paths.scripts.glob)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  }

  return gulp.src(paths.scripts.glob)
    .pipe(eslint())
    .pipe(eslint.format())
}
