import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import moxios from 'moxios';
import * as actions from '../actions';
import instance from '../config/axiosconfig';


// const host = 'http://localhost:5000';

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
    const store = mockStore({ auth: [] });
    return store.dispatch(actions.registerUser(credentials)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });
});

