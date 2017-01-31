import { Map } from 'immutable';

// flow weak
import type { Action, State } from '../flow/types';

import words from '../data/words';

function word(state: State = Map( {} ), action: Action) {

  // get new word & update store

  switch (action.type) {

    case 'UPDATE_WORD': {

      const newWord: string = words.getWord();
      const newState: State = state.set( 'word', newWord );

      return newState;
    }

    default: {

      return state;
    }

  }

}

export default word;
