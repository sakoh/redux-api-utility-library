var path = require('path')
// var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
}
