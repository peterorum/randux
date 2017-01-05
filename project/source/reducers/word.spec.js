import { expect } from 'chai';
import wordReducer from './word';
import { Map } from 'immutable';

describe( 'Word reducer', function() {

  it( 'should make a word', function() {

    const action = {
      type: 'UPDATE_WORD'
    };

    const actual = wordReducer( undefined, action );

    expect( actual.get('word') ).to.be.a( 'string' );
    expect( actual.get('word').length ).to.be.above( 0 );
  } );

  it( 'return a different word', function() {

    const action = {
      type: 'UPDATE_WORD'
    };

    const word1 = wordReducer( undefined, action ).get('word');
    const word2 = wordReducer( undefined, action ).get('word');

    expect( word1 ).to.not.equal( word2 );
  } );

} )
