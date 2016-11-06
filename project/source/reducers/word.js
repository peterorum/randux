import words from '../data/words';

function word(state = [], action) {

  // get new word & update store

  switch (action.type) {

    case 'UPDATE_WORD': {

      return words.getWord();
    }

    default: {

      return state;
    }

  }

}

export default word;
