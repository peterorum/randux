module.exports = {
  plugins: [
    // autoprefixer
    require( 'autoprefixer' )( {
      browsers: [ 'last 2 versions' ]
    } ),

    // convert px tp rem
    // use PX to skip
    require( 'postcss-pxtorem' )( {
      rootValue: 10, // html font-size=62.5%
      unitPrecision: 5,
      propWhiteList: [],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 0
    } )
  ]
}
