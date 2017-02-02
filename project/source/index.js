// flow weak

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Raven from 'raven-js';
import Redbox from 'redbox-react';

import 'normalize.css';
import 'animate.css';
import './styles/styles.scss';

import Root from './root';

import store, { history } from './store';

// sentry error tracking
import { sentryUrl } from './config/sentry';

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

const rootEl = document.getElementById( 'main' );

render(
  <AppContainer errorReporter={ Redbox }>
    <Root store={ store } history={ history } />
  </AppContainer>,
  rootEl
);


if (module.hot) {
  /**
   * Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */
  const orgError = console.error; // eslint-disable-line no-console

  console.error = (message) => { // eslint-disable-line no-console
    if (message && message.indexOf( 'You cannot change <Router routes>;' ) === -1) {
      // Log the error as normally
      orgError.apply( console, [ message ] );
    }
  };

  module.hot.accept( './root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
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
