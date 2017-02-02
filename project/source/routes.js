import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/app';
import WordView from './components/word/word-view';
import About from './components/about/about';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ WordView } />
    <Route path="/about" component={ About } />
  </Route>
);

