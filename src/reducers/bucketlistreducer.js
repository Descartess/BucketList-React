const INITIAL_STATE = {
  bucketlists: [],
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
      return { ...state };
    default:
      return { ...state };
  }
};
