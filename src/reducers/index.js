import { combineReducers } from 'redux';
import AuthReducer from './authreducer';

const reducers = combineReducers({
  auth: AuthReducer,
});

export default reducers;
