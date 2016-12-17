import React from 'react';

import { render } from 'react-dom';

import 'normalize.css';
import 'animate.css';
import './styles/styles.scss';

import App from './components/app/app';
import Word from './components/word/word';
import About from './components/about/about';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './store';

// sentry error tracking
import Raven from 'raven-js';
import { sentryUrl } from './config/sentry';

// expect account keys to be in env
if (process.env.sentryKey) {
  Raven.config( sentryUrl, {} ).install();
}

// svgstore
var __svg__ = {
  path: '../images/icons/**/*.svg',
  name: 'assets/images/icons/[hash].icons.svg'
};
require( 'webpack-svgstore-plugin/src/helpers/svgxhr' )( __svg__ );

const router = (
<Provider store={ store }>
  <Router history={ history }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Word }></IndexRoute>
      <Route path="/about" component={ About }></Route>
    </Route>
  </Router>
</Provider>
)

render( router, document.getElementById( 'main' ) );
