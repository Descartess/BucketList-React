import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import * as actions from '../../actions';

describe('bucketlist item sync actions', () => {
  const middlewares = [thunk, promiseMiddleware()];
  const mockStore = configureMockStore(middlewares);

  it('it dispatches SHOW_EDIT_ITEM on add bucketlist ', () => {
    const store = mockStore({});
    store.dispatch(actions.onShowEditItem());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SHOW_EDIT_ITEM' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches SHOW_EDIT_BUCKETLIST on edit bucketlist ', () => {
    const store = mockStore({});
    store.dispatch(actions.onShowAddItem());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SHOW_ADD_ITEM' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches SHOW_DELETE_ITEM on delete bucketlist ', () => {
    const store = mockStore({});
    store.dispatch(actions.onShowDeleteItem());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SHOW_DELETE_ITEM' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches ON_NAME_CHANGE on change name', () => {
    const store = mockStore({});
    const e = { target: { value: 'Paul' } };
    store.dispatch(actions.onNameChange(e));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'ON_NAME_CHANGE', payload: 'Paul' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches TOGGLE_COMPLETED on toggle completed ', () => {
    const store = mockStore({});
    store.dispatch(actions.onToggleCompleted());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'TOGGLE_COMPLETED' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });
});
