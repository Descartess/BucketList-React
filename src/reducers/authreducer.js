const INITIAL_STATE = {
  loading: false,
  token: null,
  authenticated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING':
      return { ...state, loading: true };
    case 'REGISTER_REJECTED':
      return { ...state, loading: false, error: true };
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        loading: false,
        token: action.payload.data.token,
        authenticated: true,
      };
    case 'SIGNIN_PENDING':
      return { ...state, loading: true };
    case 'SIGNIN_REJECTED':
      return { ...state, loading: true, error: true };
    case 'SIGNIN_FULFILLED':
      return {
        ...state,
        loading: false,
        token: action.payload.data.token,
        authenticated: true,
      };
    default:
      return state;
  }
};
