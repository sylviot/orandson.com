const variables = { variables: require('../styles/defaults.json') }

module.exports = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-each'),
  require('postcss-for'),
  require('postcss-simple-vars')(variables),
  require('postcss-calc')({ mediaQueries: true }),
  require('postcss-color-function'),
  require('postcss-custom-media'),
  require('postcss-nested'),
  require('autoprefixer'),
  require('cssnano')
]
