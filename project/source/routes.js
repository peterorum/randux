import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/app';
import Word from './components/word/word';
import About from './components/about/about';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Word } />
    <Route path="/about" component={ About } />
  </Route>
);
