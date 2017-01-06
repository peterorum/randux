var path = require( 'path' );
var svgStore = require( 'webpack-svgstore-plugin' );
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractCss = new ExtractTextPlugin('styles.css');
var extractCssLibs = new ExtractTextPlugin('libs.css');

module.exports = {
  devtool: 'source-map',
  entry: [
    './source/randux'
  ],
  output: {
    path: path.join( __dirname, 'dev' ),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new svgStore( {
      prefix: 'icon-'
    } ),
    extractCssLibs,
    extractCss,
    new HtmlWebpackPlugin({
      template: 'index.template.html',
      filename: '../index.html'
    })
  ],
  module: {
    preLoaders: [],

    loaders: [
      // js
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join( __dirname, 'source' ),
        exclude: /node_modules/
      },
      // add normalize.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/normalize.css' ),
        // loaders: [ 'style', 'css' ]
        loader:extractCssLibs.extract('style', 'css')
      },
      // add animate.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/animate.css' ),
        // loaders: [ 'style', 'css' ]
        loader:extractCssLibs.extract('style', 'css')
      },
      // images
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file?name=[path][name].[ext]'
      },
      // css
      // assume one styles.scss that imports all it needs from the components
      // so each new component needs to be added to styles.scss
      {
        test: /\.scss$/,
        include: path.join( __dirname, 'source/styles/styles.scss' ),
        // loaders: [ 'style', 'css', 'postcss-loader', 'sass' ]
        loader:extractCss.extract('style', 'css!postcss!sass')
      }
    ]
  }
};
