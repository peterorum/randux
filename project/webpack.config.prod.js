const path = require( 'path' );
const webpack = require( 'webpack' );
const SvgStore = require( 'webpack-svgstore-plugin' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require( "copy-webpack-plugin" );

const extractCss = new ExtractTextPlugin( 'css/styles-[contenthash].css' );
const extractCssLibs = new ExtractTextPlugin( 'css/libs-[contenthash].css' );

// copy static files to dist folder

const copyFiles = new CopyWebpackPlugin( [
  {
    from: "images/**/*"
  },
  {
    from: "data/*.json"
  },
  {
    from: "server/serve*"
  }

], {} );

module.exports = {
  devtool: 'source-map',
  entry: {
    'js/bundle': './source/randux'
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: '[name]-[hash].js',
    publicPath: ''
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
    new SvgStore( {
      prefix: 'icon-'
    } ),
    extractCssLibs,
    extractCss,
    // creates a new index.html under dist with the hashed bundles
    new HtmlWebpackPlugin({
      template: 'index.template.html'
    }),
    copyFiles
  ],
  module: {
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
