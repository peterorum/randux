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

} )
