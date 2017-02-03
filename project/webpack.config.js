const path = require( 'path' );
const webpack = require('webpack');
const SvgStore = require( 'webpack-svgstore-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const FlowBabelWebpackPlugin = require( 'flow-babel-webpack-plugin' );

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './source/index'
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
    new webpack.HotModuleReplacementPlugin(),
    new SvgStore( {
      prefix: 'icon-'
    } ),
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
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      // add animate.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'node_modules/animate.css' ),
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      // sass
      // assume one styles.scss that imports all it needs from the components
      // so each new component needs to be added to styles.scss
      {
        test: /\.scss$/,
        include: path.resolve( __dirname, 'source/styles/styles.scss' ),
        loaders: [
          'style-loader',
          'css-loader',
          { loader: 'sass-loader', query: { outputStyle: 'expanded' } }
        ]
      },
      // images
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
};
