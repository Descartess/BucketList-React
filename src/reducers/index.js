import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import BucketListReducer from './bucketlistreducer';
import ItemsContainerReducer from './itemContainerreducer';

const reducers = combineReducers({
  auth: AuthReducer,
  bucketlists: BucketListReducer,
  itemsContainer: ItemsContainerReducer,
});

export default reducers;
