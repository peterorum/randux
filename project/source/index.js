// flow weak

import React from 'react';
import { render } from 'react-dom';
import Raven from 'raven-js';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { fromJS } from 'immutable';

import 'normalize.css';
import 'animate.css';
import './styles/styles.scss';

import Root from './root';
import configureStore from './store';


// sentry error tracking
import { sentryUrl } from './config/sentry';

const initialState = {
  word: fromJS( {
    word: 'fish'
  } )
};

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById( 'main' );

// expect account keys to be in env
if (process.env.sentryKey) {
  Raven.config( sentryUrl, {} ).install();
}

// svgstore
// eslint-disable-next-line no-underscore-dangle
const __svg__ = {
  path: '../images/icons/**/*.svg',
  name: 'images/icons/[hash].icons.svg'
};

require( 'webpack-svgstore-plugin/src/helpers/svgxhr' )( __svg__ );

render(
  <AppContainer errorReporter={ Redbox }>
    <Root store={ store } history={ history } />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  // https://github.com/gaearon/react-hot-loader/issues/298

  const orgError = console.error; // eslint-disable-line no-console

  console.error = (message) => { // eslint-disable-line no-console
    if (message && message.indexOf( 'You cannot change <Router routes>;' ) === -1) {
      // Log the error as normally
      orgError.apply( console, [ message ] );
    }
  };

  module.hot.accept( './root', () => {
    // eslint-disable-next-line global-require
    const NextApp = require( './root' ).default;

    render(
      <AppContainer errorReporter={ Redbox }>
        <NextApp store={ store } history={ history } />
      </AppContainer>,
      rootEl
    );
  } );
}
