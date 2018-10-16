import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import todoReducer from './reducers/todo';

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(reducer, middleware);