const path = require( 'path' );
const SvgStore = require( 'webpack-svgstore-plugin' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const FlowBabelWebpackPlugin = require( 'flow-babel-webpack-plugin' );

const extractCss = new ExtractTextPlugin( 'styles.css' );
const extractCssLibs = new ExtractTextPlugin( 'libs.css' );

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
    new SvgStore( {
      prefix: 'icon-'
    } ),
    extractCssLibs,
    extractCss,
    // create a new index.html in the root folder based on the template
    // so that bundles etc can be injected, and hashed ones can be injected in production
    new HtmlWebpackPlugin( {
      template: 'index.template.html',
      filename: '../index.html'
    } ),
    new FlowBabelWebpackPlugin()
  ],
  module: {

    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: [ 'babel', 'eslint' ],
        include: path.join( __dirname, 'source' ),
        exclude: /node_modules/
      },
      // add normalize.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/normalize.css' ),
        // loaders: [ 'style', 'css' ]
        loader: extractCssLibs.extract( 'style', 'css' )
      },
      // add animate.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/animate.css' ),
        // loaders: [ 'style', 'css' ]
        loader: extractCssLibs.extract( 'style', 'css' )
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
        loader: extractCss.extract( 'style', 'css!postcss!sass' )
      }
    ]
  }
};
