import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import BucketListReducer from './bucketlistreducer';

const reducers = combineReducers({
  auth: AuthReducer,
  bucketlists: BucketListReducer,
});

export default reducers;
