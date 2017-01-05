module.exports = {
  plugins: [
    // @import
    require('postcss-import'),

    // mixins
    require( 'postcss-mixins' )(),
    require( 'postcss-simple-vars' )(),

    // cssnext
    require( 'postcss-cssnext' )(),

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
