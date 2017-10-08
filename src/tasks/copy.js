const gulp = require('gulp')
const copy = require('gulp-copy')

const paths = require('./paths')

const options = {}

const files = [
  'CNAME'
]

module.exports = () => {
  return gulp.src(files)
    .pipe(copy(paths.dest, options))
}
