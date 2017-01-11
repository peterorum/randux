import {expect} from 'chai';

import {updateWord} from './word.js';

describe( 'Word action', () => {

  describe( 'updateWord', () => {

    it( 'should create an action to change the word', () => {

      const expected = {type: 'UPDATE_WORD'};

      const actual = updateWord();

      expect( actual ).to.deep.equal( expected );
    } );

  } );

} )
