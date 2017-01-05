var path = require( 'path' );
var svgStore = require( 'webpack-svgstore-plugin' );

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
    } )
  ],
  module: {
    preLoaders: [],

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
      // assume one styles.scss that imports all it needs from the components
      // so each new component needs to be added to styles.css
      {
        test: /\.css$/,
        include: path.join( __dirname, 'source/styles/styles.css' ),
        loaders: [ 'style', 'css', 'postcss-loader' ]
      }
    ]
  }
};
