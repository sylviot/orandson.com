const notify = require('gulp-notify')

module.exports = function (error) {
  notify.onError({
    title: 'PostCSS Error!',
    message: 'Check your terminal for more information.'
  })(error)

  console.log(`Message: ${error.message}`)

  this.emit('end')
}
