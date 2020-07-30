import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
let store;

export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));

  return store;
}
