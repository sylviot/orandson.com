const gulp = require('gulp')
const webserver = require('gulp-webserver')

const paths = require('./paths')

const options = {
  fallback: 'index.html',
  livereload: true,
  open: true
}

module.exports = () => {
  return gulp.src(paths.dest)
    .pipe(webserver(options))
}
