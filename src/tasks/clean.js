const del = require('del')

const paths = require('./paths')

module.exports = () => del([paths.dest], { force: true })
