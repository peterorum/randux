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
      // assume one styles.scss that imports all it needs from the components
      // so each new component needs to be added to styles.scss
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'source/styles'),
        loaders: ["style", "css", "sass"]
      }
    ]
  }

};
