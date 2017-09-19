import _ from 'lodash';

const INITIAL_STATE = {
  bucketlists: [],
  selectedBucket: null,
  selectedItem: null,
  showAddBucketList: false,
  showEditBucketList: false,
  showDeleteBucketList: false,
  bucketlist_name: '',
  bucketlist_age: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_BUCKETLISTS_PENDING':
      return { ...state };
    case 'GET_BUCKETLISTS_FULFILLED':
      return { ...state, bucketlists: action.payload.data.bucketlists };
    case 'POST_BUCKETLISTS_PENDING':
      return { ...state };
    case 'POST_BUCKETLISTS_FULFILLED':
      return { ...state,
        bucketlists: _.concat(state.bucketlists, action.payload.data.bucketlist),
      };
    case 'DELETE_BUCKETLISTS_FULFILLED': {
      const { bucketlist } = action.payload.data;
      const bucketlists = _.remove(state.bucketlists, n => n.id !== bucketlist);
      return { ...state,
        bucketlists,
      }; }
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
      return { ...state, selectedBucket: action.payload };
    case 'SELECT_ITEM':
      return { ...state, selectedItem: action.payload };
    case 'CHANGE_BUCKETLIST_NAME':
      return { ...state, bucketlist_name: action.payload };
    case 'CHANGE_BUCKETLIST_AGE':
      return { ...state, bucketlist_age: action.payload };
    case 'SHOW_ADD_BUCKETLIST':
      return { ...state, showAddBucketList: !state.showAddBucketList };
    case 'SHOW_EDIT_BUCKETLIST':
      return { ...state, showEditBucketList: !state.showEditBucketList };
    case 'SHOW_DELETE_BUCKETLIST':
      return { ...state, showDeleteBucketList: !state.showDeleteBucketList };
    default:
      return { ...state };
  }
};
