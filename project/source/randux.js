import React from 'react';

import { render } from 'react-dom';

import 'normalize.css';
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
Raven.config( sentryUrl, {} ).install();

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
