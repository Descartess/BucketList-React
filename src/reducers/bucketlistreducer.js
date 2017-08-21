import _ from 'lodash';

const INITIAL_STATE = {
  bucketlists: [],
  selected_bucket: null,
  selected_item: null,
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
      return { ...INITIAL_STATE };
    case 'SELECT_BUCKETLIST':
      return { ...state, selected_bucket: action.payload };
    case 'SELECT_ITEM':
      return { ...state, selected_item: action.payload };
    default:
      return { ...state };
  }
};
