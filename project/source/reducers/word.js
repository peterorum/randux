import words from '../data/words';
import {Map} from 'immutable';

function word(state = Map({}), action) {

  // get new word & update store

  switch (action.type) {

    case 'UPDATE_WORD': {

      const newWord = words.getWord();
      const newState = state.set('word', newWord);

      return newState;
    }

    default: {

      return state;
    }

  }

}

export default word;
