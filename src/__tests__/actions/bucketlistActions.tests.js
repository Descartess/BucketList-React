import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import moxios from 'moxios';
import * as actions from '../../actions';
import instance from '../../config/axiosconfig';

describe('bucketlist async actions', () => {
  const middlewares = [thunk, promiseMiddleware()];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
  it('it dispatches GET_BUCKETLISTS_FULFILLED and GET_BUCKETLISTS_PENDING on fetch buckets', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    const expectedActions = ['GET_BUCKETLISTS_PENDING', 'GET_BUCKETLISTS_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.getBucketLists()).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });

  it('it dispatches POST_BUCKETLISTS_FULFILLED and POST_BUCKETLISTS_PENDING on fetch buckets', () => {
    const data = { name: 'Career', completed_by: 40 };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
      });
    });
    const expectedActions = ['POST_BUCKETLISTS_PENDING', 'POST_BUCKETLISTS_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.postBucketList(data)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });

  it('it dispatches DELETE_BUCKETLISTS_FULFILLED and DELETE_BUCKETLISTS_PENDING on fetch buckets', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
      });
    });
    const expectedActions = ['DELETE_BUCKETLISTS_PENDING', 'DELETE_BUCKETLISTS_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.deleteBucketList(15)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });

  it('it dispatches EDIT_BUCKETLISTS_FULFILLED and EDIT_BUCKETLISTS_PENDING on fetch buckets', () => {
    const data = {};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
      });
    });
    const expectedActions = ['EDIT_BUCKETLISTS_PENDING', 'EDIT_BUCKETLISTS_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.putBucketList(15, data)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });

  it('it dispatches POST_ITEMS_FULFILLED and POST_ITEMS_PENDING on fetch buckets', () => {
    const data = {};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
      });
    });
    const expectedActions = ['POST_ITEMS_PENDING', 'POST_ITEMS_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.addBucketListItem(15, data)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });

  it('it dispatches EDIT_ITEMS_FULFILLED and EDIT_ITEMS_PENDING on fetch buckets', () => {
    const data = {};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
      });
    });
    const expectedActions = ['EDIT_ITEMS_PENDING', 'EDIT_ITEMS_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.editBucketListItem(15, 1, data)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });

  it('it dispatches DELETE_ITEMS_FULFILLED and EDELETE_ITEMS_PENDING on fetch buckets', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
      });
    });
    const expectedActions = ['DELETE_ITEMS_PENDING', 'DELETE_ITEMS_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.deleteBucketListItem(15, 1)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    },
    );
  });
});

describe('bucketlist sync actions', () => {
  const middlewares = [thunk, promiseMiddleware()];
  const mockStore = configureMockStore(middlewares);

  it('it dispatches SHOW_ADD_BUCKETLIST on add bucketlist ', () => {
    const store = mockStore({});
    store.dispatch(actions.onShowAddBucketList());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SHOW_ADD_BUCKETLIST' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches SHOW_EDIT_BUCKETLIST on edit bucketlist ', () => {
    const store = mockStore({});
    store.dispatch(actions.onShowEditBucketList());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SHOW_EDIT_BUCKETLIST' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches SHOW_DELETE_BUCKETLIST on delete bucketlist ', () => {
    const store = mockStore({});
    store.dispatch(actions.onShowDeleteBucketList());
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SHOW_DELETE_BUCKETLIST' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches CHANGE_BUCKETLIST_AGE on change age', () => {
    const store = mockStore({});
    const e = { target: { value: 25 } };
    store.dispatch(actions.onChangeBucketListAge(e));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'CHANGE_BUCKETLIST_AGE', payload: 25 }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches CHANGE_BUCKETLIST_NAME on change age', () => {
    const store = mockStore({});
    const e = { target: { value: 'Career' } };
    store.dispatch(actions.onChangeBucketListName(e));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'CHANGE_BUCKETLIST_NAME', payload: 'Career' }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches SELECT_ITEM on change age', () => {
    const store = mockStore({});
    store.dispatch(actions.selectBucketItem(1));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SELECT_ITEM', payload: 1 }];
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('it dispatches SELECT_BUCKETLIST on change bucket list', () => {
    const store = mockStore({});
    store.dispatch(actions.selectBucketList(1));
    const dispatchedActions = store.getActions();
    const expectedActions = [{ type: 'SELECT_BUCKETLIST', payload: 1 }];
    expect(dispatchedActions).toEqual(expectedActions);
  });
});
