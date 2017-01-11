import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducers/index';

import { updateWord } from './actions/word.js';

const defaultState = {
  word: fromJS( {
    word: 'fish'
  } )
};

//----------- create store

const middleware = [ thunk ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== 'production') {
  middleware.push( createLogger() )
}

const store = createStore( rootReducer, defaultState, composeEnhancers(
  applyMiddleware( ...middleware )
) );

export const history = syncHistoryWithStore( browserHistory, store );

if (module.hot) {
  module.hot.accept( './reducers/', () => {
    const nextRootReducer = require( './reducers/index' ).default;

    store.replaceReducer( nextRootReducer );
  } );
}

//---------- preload data

store.dispatch( updateWord() );

export default store;
