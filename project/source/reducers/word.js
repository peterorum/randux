import words from '../data/words';

function word(state = [], action) {

  // get new word & update store


  if (action.type === 'UPDATE_WORD') {
    state = words.getWord();
  }

  return state;
}

export default word;
