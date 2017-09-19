const INITIAL_STATE = {
  loading: false,
  token: null,
  authenticated: false,
  showSignIn: false,
  showSignUp: false,
  username: '',
  password: '',
  rpassword: '',
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
    case 'SIGNOUT_FULFILLED':
      return { ...INITIAL_STATE };
    case 'RESETPASSWORD_FULFILLED':
      return {
        ...state,
        loading: false,
        token: action.payload.data.token,
      };
    case 'USERNAME_CHANGE':
      return { ...state, username: action.payload };
    case 'PASSWORD_CHANGE':
      return { ...state, password: action.payload };
    case 'REPEAT_PASSWORD_CHANGE':
      return { ...state, rpassword: action.payload };
    case 'SHOW_SIGNIN':
      return { ...state, showSignIn: !state.showSignIn };
    case 'SHOW_SIGNUP':
      return { ...state, showSignUp: !state.showSignUp };
    default:
      return state;
  }
};
