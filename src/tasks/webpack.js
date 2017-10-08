const gulp = require('gulp')
const size = require('gulp-size')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')

const paths = require('./paths')
const config = require('../../webpack.config')

module.exports = () => {
  return gulp.src(paths.scripts.main)
    .pipe(plumber())
    .pipe(webpack(config))
    .pipe(plumber.stop())
    .pipe(size())
    .pipe(gulp.dest(paths.scripts.dest))
}
