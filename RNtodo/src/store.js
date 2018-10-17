import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { logger } from 'redux-logger'

import appReducer from './reducers/index';

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(appReducer, middleware);

export default store;