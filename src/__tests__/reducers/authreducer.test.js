import reducer, { INITIAL_STATE } from '../../reducers/authreducer';

describe('items reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should show sign in', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SHOW_SIGNIN',
    })).toEqual({ ...INITIAL_STATE, showSignIn: !INITIAL_STATE.showSignIn });
  });

  it('should show sign up', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SHOW_SIGNUP',
    })).toEqual({ ...INITIAL_STATE, showSignUp: !INITIAL_STATE.showSignUp });
  });

  it('should show reset password', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SHOW_RESETPASSWORD',
    })).toEqual({ ...INITIAL_STATE, showResetPassword: !INITIAL_STATE.showResetPassword });
  });

  it('should update state on successful register', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'REGISTER_FULFILLED',
      payload: { data: { token: 'token' } },
    })).toEqual({
      ...INITIAL_STATE,
      loading: false,
      token: 'token',
      authenticated: true,
    });
  });

  it('should update state on successful sign in', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SIGNIN_FULFILLED',
      payload: { data: { token: 'token' } },
    })).toEqual({
      ...INITIAL_STATE,
      loading: false,
      token: 'token',
      authenticated: true,
    });
  });

  it('should update state on successful sign in', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'RESETPASSWORD_FULFILLED',
      payload: { data: { token: 'token' } },
    })).toEqual({
      ...INITIAL_STATE,
      loading: false,
      token: 'token',
    });
  });

  it('should show error on rejected calls', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'REGISTER_REJECTED',
      payload: { response: { data: {} } },
    })).toEqual({ ...INITIAL_STATE, loading: false, error: true });
  });

  it('should show error on rejected calls', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SIGNIN_REJECTED',
      payload: { response: { data: {} } },
    })).toEqual({ ...INITIAL_STATE, loading: false, error: true });
  });

  it('should show loading during async calls', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'REGISTER_PENDING',
    })).toEqual({ ...INITIAL_STATE, loading: true });
  });

  it('should show loading during async calls', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SIGNIN_PENDING',
    })).toEqual({ ...INITIAL_STATE, loading: true });
  });

  it('should clear state on sign out', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SIGNOUT_FULFILLED',
    })).toEqual({ ...INITIAL_STATE });
  });

  it('should update the name ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'USERNAME_CHANGE',
      payload: 'Paul',
    })).toEqual({ ...INITIAL_STATE, username: 'Paul' });
  });
  it('should update the name ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'PASSWORD_CHANGE',
      payload: 'Paul',
    })).toEqual({ ...INITIAL_STATE, password: 'Paul' });
  });
  it('should update the name ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'REPEAT_PASSWORD_CHANGE',
      payload: 'Paul',
    })).toEqual({ ...INITIAL_STATE, rpassword: 'Paul' });
  });
});
