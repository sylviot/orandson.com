const gulp = require('gulp')
const pages = require('gulp-gh-pages')
const fs = require('fs')

const paths = require('./paths')

module.exports = () => {
  fs.writeFileSync('dist/CNAME', 'orandson.com')

  return gulp.src(`${paths.dest}/**/*`)
    .pipe(pages())
}
