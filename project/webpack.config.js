var path = require('path');
// var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './source/randux'
  ],
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  devServer: {
      historyApiFallback: true
  },
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'source')
      },
      // css
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'source'),
        loaders: ["style", "css", "sass"]
      }
    ]
  }

};
