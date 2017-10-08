const join = require('path').join

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/scripts/entry.js',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      scripts: join(__dirname, 'src/scripts/')
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
