import { expect } from 'chai';
import wordReducer from './word';

describe( 'Word reducer', function() {

  it( 'should make a word', function() {

    const action = {
      type: 'UPDATE_WORD'
    };

    const actual = wordReducer( [], action );

    expect( actual ).to.be.a( 'string' );
    expect( actual.length ).to.be.above( 0 );
  } );

  it( 'return a different word', function() {

    const action = {
      type: 'UPDATE_WORD'
    };

    const word1 = wordReducer( [], action );
    const word2 = wordReducer( [], action );

    expect( word1 ).to.not.equal( word2 );
  } );

} )
