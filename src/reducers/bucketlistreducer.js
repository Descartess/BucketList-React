import _ from 'lodash';

export const INITIAL_STATE = {
  bucketlists: [],
  selectedBucket: null,
  selectedItem: null,
  showAddBucketList: false,
  showEditBucketList: false,
  showDeleteBucketList: false,
  bucketlist_name: '',
  bucketlist_age: '',
  bucket_error: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_BUCKETLISTS_PENDING':
      return { ...state, loading: true };
    case 'GET_BUCKETLISTS_FULFILLED':
      return { ...state, bucketlists: action.payload.data.bucketlists };
    case 'POST_BUCKETLISTS_PENDING':
      return { ...state, loading: true };
    case 'POST_BUCKETLISTS_FULFILLED':
      return { ...state,
        bucketlists: _.concat(state.bucketlists, action.payload.data.bucketlist),
      };
    case 'DELETE_BUCKETLISTS_REJECTED':
      return { ...state, bucket_error: true };
    case 'DELETE_BUCKETLISTS_PENDING':
      return { ...state, loading: true };
    case 'EDIT_BUCKETLISTS_FULFILLED': {
      const { bucketlist } = action.payload.data;
      return { ...state,
        bucketlists: _.unionBy([bucketlist], state.bucketlists, 'id'),
      }; }
    case 'SIGNOUT_FULFILLED':
      return { ...state };
    case 'POST_ITEMS_FULFILLED': {
      const { bucketlist } = action.payload.data;
      return { ...state,
        bucketlists: _.unionBy([bucketlist], state.bucketlists, 'id'),
      }; }
    case 'DELETE_ITEMS_FULFILLED': {
      const { bucketlist } = action.payload.data;
      return { ...state,
        bucketlists: _.unionBy([bucketlist], state.bucketlists, 'id'),
      }; }
    case 'EDIT_ITEMS_FULFILLED': {
      const { bucketlist } = action.payload.data;
      return { ...state,
        bucketlists: _.unionBy([bucketlist], state.bucketlists, 'id'),
      }; }
    case 'SELECT_BUCKETLIST':
      return {
        ...state,
        selectedBucket: action.payload.id,
        bucketlist_name: action.payload.name,
        bucketlist_age: action.payload.completed_by };
    case 'SELECT_ITEM':
      return { ...state, selectedItem: action.payload.id };
    case 'CHANGE_BUCKETLIST_NAME':
      return { ...state, bucketlist_name: action.payload };
    case 'CHANGE_BUCKETLIST_AGE':
      return { ...state, bucketlist_age: action.payload };
    case 'SHOW_ADD_BUCKETLIST':
      return {
        ...state,
        showAddBucketList: !state.showAddBucketList,
        bucketlist_name: '',
        bucketlist_age: '',
        bucket_error: false,
      };
    case 'SHOW_EDIT_BUCKETLIST':
      return { ...state,
        showEditBucketList: !state.showEditBucketList,
        bucket_error: false,
      };
    case 'SHOW_DELETE_BUCKETLIST':
      return { ...state,
        showDeleteBucketList: !state.showDeleteBucketList,
        bucket_error: false,
      };
    default:
      return { ...state };
  }
};
