import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import words from './data/words';

const defaultState = {
  word: words.getWord()
};

const store = createStore( rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore( browserHistory, store );

if (module.hot) {
  module.hot.accept( './reducers/', () => {
    const nextRootReducer = require( './reducers/index' ).default;
    store.replaceReducer( nextRootReducer );
  } );
}

export default store;
