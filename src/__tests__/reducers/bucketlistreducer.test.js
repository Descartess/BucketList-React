import reducer, { INITIAL_STATE } from '../../reducers/bucketlistreducer';

describe('items reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should show delete bucketlist', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SHOW_DELETE_BUCKETLIST',
    })).toEqual({ ...INITIAL_STATE, showDeleteBucketList: !INITIAL_STATE.showDeleteBucketList });
  });

  it('should show edit bucketlist', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SHOW_EDIT_BUCKETLIST',
    })).toEqual({ ...INITIAL_STATE, showEditBucketList: !INITIAL_STATE.showEditBucketList });
  });

  it('should show add bucketlist', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SHOW_ADD_BUCKETLIST',
    })).toEqual({ ...INITIAL_STATE, showAddBucketList: !INITIAL_STATE.showAddBucketList });
  });

  it('should update state on successful fetch of buckets ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'GET_BUCKETLISTS_FULFILLED',
      payload: { data: { bucketlists: [] } },
    })).toEqual({
      ...INITIAL_STATE,
      bucketlists: [],
    });
  });

  it('should update state on successful post of buckets ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'POST_BUCKETLISTS_FULFILLED',
      payload: { data: { bucketlist: { id: 1, name: 'Career' } } },
    })).toEqual({
      ...INITIAL_STATE,
      bucketlists: [{ id: 1, name: 'Career' }],
    });
  });

  it('should update state on successful post of buckets ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'POST_ITEMS_FULFILLED',
      payload: { data: { bucketlist: { id: 1, name: 'Career', items: [] } } },
    })).toEqual({
      ...INITIAL_STATE,
      bucketlists: [{ id: 1, name: 'Career', items: [] }],
    });
  });

  it('should update state on successful post of buckets ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'DELETE_ITEMS_FULFILLED',
      payload: { data: { bucketlist: { id: 1, name: 'Career', items: [] } } },
    })).toEqual({
      ...INITIAL_STATE,
      bucketlists: [{ id: 1, name: 'Career', items: [] }],
    });
  });

  it('should update state on successful delete of buckets ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'DELETE_BUCKETLISTS_FULFILLED',
      payload: { data: { bucketlist: { id: 1, name: 'Career', items: [] } } },
    })).toEqual({
      ...INITIAL_STATE,
      bucketlists: [],
    });
  });

  it('should update state on successful post of buckets ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'EDIT_ITEMS_FULFILLED',
      payload: { data: { bucketlist: { id: 1, name: 'Career', items: [] } } },
    })).toEqual({
      ...INITIAL_STATE,
      bucketlists: [{ id: 1, name: 'Career', items: [] }],
    });
  });

  it('should update state on successful post of buckets ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'EDIT_BUCKETLISTS_FULFILLED',
      payload: { data: { bucketlist: { id: 1, name: 'Career', items: [] } } },
    })).toEqual({
      ...INITIAL_STATE,
      bucketlists: [{ id: 1, name: 'Career', items: [] }],
    });
  });

  it('should update state on get bucketlist pending', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'GET_BUCKETLISTS_PENDING',
    })).toEqual({
      ...INITIAL_STATE,
      loading: true,
    });
  });

  it('should update state on post bucketlist pending', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'POST_BUCKETLISTS_PENDING',
    })).toEqual({
      ...INITIAL_STATE,
      loading: true,
    });
  });

  it('should clear state on sign out', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SIGNOUT_FULFILLED',
    })).toEqual({ ...INITIAL_STATE });
  });

  it('should update the selected bucketlist ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SELECT_BUCKETLIST',
      payload: { id: 2, name: 'Career', completed_by: 23 },
    })).toEqual({
      ...INITIAL_STATE,
      selectedBucket: 2,
      bucketlist_name: 'Career',
      bucketlist_age: 23,
    });
  });

  it('should update the selected item  ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'SELECT_ITEM',
      payload: { id: 2 },
    })).toEqual({ ...INITIAL_STATE, selectedItem: 2 });
  });

  it('should update the name ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'CHANGE_BUCKETLIST_AGE',
      payload: 45,
    })).toEqual({ ...INITIAL_STATE, bucketlist_age: 45 });
  });
  it('should update the age ', () => {
    expect(reducer(INITIAL_STATE, {
      type: 'CHANGE_BUCKETLIST_NAME',
      payload: 'Paul',
    })).toEqual({ ...INITIAL_STATE, bucketlist_name: 'Paul' });
  });
});
