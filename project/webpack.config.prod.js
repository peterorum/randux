var path = require('path');
var webpack = require('webpack');
var svgStore = require( 'webpack-svgstore-plugin' );

module.exports = {
  devtool: 'source-map',
  entry: [
    './source/randux'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new svgStore( {
      prefix: 'icon-'
    } )
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join( __dirname, 'source' )
      },
      // add normalize.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/normalize.css' ),
        loaders: [ 'style', 'css' ]
      },
      // add animate.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/animate.css' ),
        loaders: [ 'style', 'css' ]
      },
      // images
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file?name=[path][name].[ext]"
      },
      // css
      {
        test: /\.scss$/,
        include: path.join( __dirname, 'source/styles' ),
        loaders: [ 'style', 'css', 'postcss-loader', 'sass' ]
      }
    ]
  }
};
