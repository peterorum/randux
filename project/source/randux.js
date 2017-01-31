// flow weak

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Raven from 'raven-js';

import 'normalize.css';
import 'animate.css';
import './styles/styles.scss';

import App from './components/app/app';
import Word from './components/word/word';
import About from './components/about/about';

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

// eslint-disable-next-line no-extra-parens
const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Word } />
        <Route path="/about" component={ About } />
      </Route>
    </Router>
  </Provider>
);

render( router, document.getElementById( 'main' ) );

