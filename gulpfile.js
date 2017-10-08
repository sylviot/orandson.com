const gulp = require('gulp')

const paths = require('./src/tasks/paths')

gulp.task('clean', require('./src/tasks/clean'))
gulp.task('eslint', require('./src/tasks/eslint'))
gulp.task('webpack', require('./src/tasks/webpack'))
gulp.task('stylelint', require('./src/tasks/stylelint'))
gulp.task('postcss', require('./src/tasks/postcss'))
gulp.task('webserver', require('./src/tasks/webserver'))
gulp.task('copy', require('./src/tasks/copy'))
gulp.task('metalsmith', require('./src/tasks/metalsmith'))
gulp.task('htmlmin', require('./src/tasks/html-min'))
gulp.task('gh-pages', require('./src/tasks/deploy'))

const scripts = gulp.parallel('eslint', 'webpack')
const styles = gulp.parallel('stylelint', 'postcss')
const metalsmith = gulp.parallel('metalsmith')

gulp.task('watch', () => {
  gulp.watch(paths.scripts.glob, scripts)
  gulp.watch(paths.styles.glob, styles)
  gulp.watch(paths.docs.glob, metalsmith)
})

gulp.task(
  'build',
  gulp.series(
    'clean',
    'copy',
    'metalsmith',
    gulp.parallel('stylelint', 'postcss', 'eslint', 'webpack'),
    'htmlmin'
  )
)

gulp.task(
  'deploy',
  gulp.series(
    'clean',
    'copy',
    'metalsmith',
    gulp.parallel('stylelint', 'postcss', 'eslint', 'webpack'),
    'htmlmin',
    'gh-pages'
  )
)

gulp.task('default', gulp.series('build', 'webserver', 'watch'))
