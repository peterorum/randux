import { expect } from 'chai';
import wordReducer from './word';

describe( 'Word reducer', () => {

  it( 'should make a word', () => {

    const action = {
      type: 'UPDATE_WORD'
    };

    const actual = wordReducer( undefined, action );

    expect( actual.get( 'word' ) ).to.be.a( 'string' );
    expect( actual.get( 'word' ).length ).to.be.above( 0 );
  } );

  it( 'return a different word', () => {

    const action = {
      type: 'UPDATE_WORD'
    };

    const word1 = wordReducer( undefined, action ).get( 'word' );
    const word2 = wordReducer( undefined, action ).get( 'word' );

    expect( word1 ).to.not.equal( word2 );
  } );

} )
