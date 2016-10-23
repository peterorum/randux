var path = require('path');
// var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './source/randux'
  ],
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'source')
    }
    // // css
    // {
    //   test: /\.styl$/,
    //   include: path.join(__dirname, 'client'),
    //   loader: 'style-loader!css-loader!stylus-loader'
    // }
    ]
  },
  plugins: [
      new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:8080/'
      })
  ]

};
