import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from '../reducers';

const middleware = applyMiddleware(thunk, promiseMiddleware(), logger);

const store = createStore(reducers, middleware);

export default store;
