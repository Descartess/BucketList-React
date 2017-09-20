import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import moxios from 'moxios';
import * as actions from '../../actions';
import instance from '../../config/axiosconfig';


describe('async actions', () => {
  const middlewares = [thunk, promiseMiddleware()];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
  it('it dispatches REGISTER_FULFILLED and REGISTER_PENDING on registration', () => {
    const credentials = { username: 'test', password: 'testpass' };
    const payload = {
      token: 'alphanumeric_string',
      message: 'Pete',
      status: 'success' };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: payload,
      });
    });
    const expectedActions = ['REGISTER_PENDING', 'REGISTER_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.registerUser(credentials)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });
  it('it dispatches SIGNIN_PENDING and SIGNIN_FULFILLED on sign up', () => {
    const credentials = { username: 'test', password: 'testpass' };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    const expectedActions = ['SIGNIN_PENDING', 'SIGNIN_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.signinUser(credentials)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });
  it('it dispatches SIGNOUT_PENDING and SIGNOUT_FULFILLED on sign out', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    const expectedActions = ['SIGNOUT_PENDING', 'SIGNOUT_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.signout()).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });
  it('it dispatches RESETPASSWORD_PENDING and RESETPASSWORD_FULFILLED on reset password', () => {
    const credentials = {
      username: 'Paul',
      old_password: '12313',
      new_password: '12314',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    const expectedActions = ['RESETPASSWORD_PENDING', 'RESETPASSWORD_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.resetpassword(credentials)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });
});

describe('synchronous actions', () => {
  const middlewares = [thunk, promiseMiddleware()];
  const mockStore = configureMockStore(middlewares);

  it('it dispatches SHOW_SIGNIN on showSignIn', () => {
    const store = mockStore({});
    store.dispatch(actions.onShowSignIn());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SHOW_SIGNIN' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches SHOW_RESETPASSWORD on reset password', () => {
    const store = mockStore({});
    store.dispatch(actions.onShowResetPassword());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SHOW_RESETPASSWORD' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches SHOW_SIGNUP on showSignUp', () => {
    const store = mockStore({});
    store.dispatch(actions.onShowSignUp());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SHOW_SIGNUP' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches SHOW_SIGNUP on showSignUp', () => {
    const store = mockStore({});
    const e = { target: { value: 'Paul' } };
    store.dispatch(actions.onUsernameChange(e));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'USERNAME_CHANGE', payload: 'Paul' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches PASSWORD_CHANGE on password change', () => {
    const store = mockStore({});
    const e = { target: { value: 'Paul' } };
    store.dispatch(actions.onPasswordChange(e));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'PASSWORD_CHANGE', payload: 'Paul' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches REPEAT_PASSWORD_CHANGE on password change', () => {
    const store = mockStore({});
    const e = { target: { value: 'Paul' } };
    store.dispatch(actions.onRepeatPasswordChange(e));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'REPEAT_PASSWORD_CHANGE', payload: 'Paul' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches NEW_PASSWORD_CHANGE on password change', () => {
    const store = mockStore({});
    const e = { target: { value: 'Paul' } };
    store.dispatch(actions.changeNewPassword(e));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'NEW_PASSWORD_CHANGE', payload: 'Paul' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches OLD_PASSWORD_CHANGE on password change', () => {
    const store = mockStore({});
    const e = { target: { value: 'Paul' } };
    store.dispatch(actions.changeOldPassword(e));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'OLD_PASSWORD_CHANGE', payload: 'Paul' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });
});
