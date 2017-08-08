const INITIAL_STATE = {
  loading: false,
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING':
      return { ...state, loading: true };
    case 'REGISTER_FULFILLED':
      return { ...state, loading: false, token: action.payload.data.token };
    case 'SIGNIN_PENDING':
      return { ...state, loading: true };
    case 'SIGNIN_FULFILLED':
      return { ...state, loading: false, token: action.payload.data.token };
    default:
      return state;
  }
};
