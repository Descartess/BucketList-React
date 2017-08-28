import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';

const middleware = applyMiddleware(thunk, promiseMiddleware(), logger);

const store = createStore(reducers, middleware, autoRehydrate());

persistStore(store);
export default store;
