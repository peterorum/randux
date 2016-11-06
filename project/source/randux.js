import React from 'react'; // eslint-disable-line no-unused-vars

import { render } from 'react-dom';

import css from './styles/styles.scss';

import App from './components/app/app';
import Word from './components/word/word';
import About from './components/about/about';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Word}></IndexRoute>
        <Route path="/about" component={About}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('main-content'));
