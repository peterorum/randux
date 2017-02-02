import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const logger = createLogger();

// eslint-disable-next-line global-require
const middlewares = [thunk, promiseMiddleware, logger, require('redux-immutable-state-invariant')()];

const enhancer = compose(
  applyMiddleware(...middlewares)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Enable hot module replacement for reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('./reducers').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
