const path = require( 'path' );
const SvgStore = require( 'webpack-svgstore-plugin' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const FlowBabelWebpackPlugin = require( 'flow-babel-webpack-plugin' );

const extractCss = new ExtractTextPlugin( {
  filename: 'styles.css'
} );

const extractCssLibs = new ExtractTextPlugin( {
  filename: 'libs.css'
} );

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

    rules: [
      // js
      {
        test: /\.js$/,
        use: [ 'babel-loader?cacheDirectory', 'eslint-loader' ],
        include: path.join( __dirname, 'source' ),
        exclude: /node_modules/
      },
      // add normalize.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/normalize.css' ),
        loader: extractCssLibs.extract( {
          fallbackLoader: "style-loader",
          loader: 'css-loader'
        } )
      },
      // add animate.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/animate.css' ),
        loader: extractCssLibs.extract( {
          fallbackLoader: "style-loader",
          loader: 'css-loader'
        } )
      },
      // images
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      // css
      // assume one styles.scss that imports all it needs from the components
      // so each new component needs to be added to styles.scss
      // a separate css file is created
      {
        test: /\.scss$/,
        include: path.join( __dirname, 'source/styles/styles.scss' ),
        loader: extractCss.extract( {
          fallbackLoader: "style-loader",
          loader: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
        } )
      }
    ]
  }
};
