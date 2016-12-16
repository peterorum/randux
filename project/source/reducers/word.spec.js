import { expect } from 'chai';
import word from '../../source/reducers/word';

describe( 'Word reducer', function() {

  it( 'should make a word', function() {

    const action = {
      type: 'UPDATE_WORD'
    };

    const actual = word( [], action );

    expect( actual ).to.be.a( 'string' );
    expect( actual.length ).to.be.above( 0 );
  } );

  it( 'return a different word', function() {

    const action = {
      type: 'UPDATE_WORD'
    };

    const word1 = word( [], action );
    const word2 = word( [], action );

    expect( word1 ).to.not.equal( word2 );
  } );

} )
