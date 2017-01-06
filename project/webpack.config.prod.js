var path = require( 'path' );
var webpack = require( 'webpack' );
var svgStore = require( 'webpack-svgstore-plugin' );
var ExtractTextPlugin = require( "extract-text-webpack-plugin" );
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractCss = new ExtractTextPlugin( 'styles-[contenthash].css' );
var extractCssLibs = new ExtractTextPlugin( 'libs-[contenthash].css' );

module.exports = {
  devtool: 'source-map',
  entry: [
    './source/randux'
  ],
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: 'bundle-[hash].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin( {
      'process.env': {
        'NODE_ENV': "'production'"
      }
    } ),
    new webpack.optimize.UglifyJsPlugin( {
      compressor: {
        warnings: false
      }
    } ),
    new svgStore( {
      prefix: 'icon-'
    } ),
    extractCssLibs,
    extractCss,
    // creates a new index.html under dist with the hashed bundles
    new HtmlWebpackPlugin({
      template: 'index.template.html'
    })
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
        // loaders: [ 'style', 'css' ]
        loader: extractCssLibs.extract( 'style', 'css!postcss!sass' )

      },
      // add animate.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/animate.css' ),
        // loaders: [ 'style', 'css' ]
        loader: extractCssLibs.extract( 'style', 'css!postcss!sass' )
      },
      // images
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file?name=[path][name].[ext]"
      },
      // css
      {
        test: /\.scss$/,
        include: path.join( __dirname, 'source/styles/styles.scss' ),
        loader: extractCss.extract( 'style', 'css!postcss!sass' )
      }
    ]
  }
};
