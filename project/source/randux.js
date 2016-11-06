import React from 'react'; // eslint-disable-line no-unused-vars

import { render } from 'react-dom';

import css from './styles/styles.scss';

import Main from './components/main/Main';
import Word from './components/word/Word';
import About from './components/about/About';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Word}></IndexRoute>
      <Route path="/about" component={About}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('main-content'));
