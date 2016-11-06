import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import word from './word';

const rootReducer = combineReducers({
  word, // key corressponds to defaultState property name so the action only gets that data as state
  routing: routerReducer
});

export default rootReducer;
