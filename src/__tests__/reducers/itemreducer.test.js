import reducer, { initialState } from '../../reducers/itemContainerreducer';

describe('items reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should show edit item', () => {
    expect(reducer(initialState, {
      type: 'SHOW_EDIT_ITEM',
    })).toEqual({ ...initialState, showEditItem: !initialState.showEditItem });
  });

  it('should show add item', () => {
    expect(reducer(initialState, {
      type: 'SHOW_ADD_ITEM',
    })).toEqual({ ...initialState, showAddItem: !initialState.showAddItem });
  });

  it('should show delete item', () => {
    expect(reducer(initialState, {
      type: 'SHOW_DELETE_ITEM',
    })).toEqual({ ...initialState, showDeleteItem: !initialState.showDeleteItem });
  });

  it('should toggle completed', () => {
    expect(reducer(initialState, {
      type: 'TOGGLE_COMPLETED',
    })).toEqual({ ...initialState, completed: !initialState.completed });
  });

  it('should update the name ', () => {
    expect(reducer(initialState, {
      type: 'ON_NAME_CHANGE',
      payload: 'Paul',
    })).toEqual({ ...initialState, item_name: 'Paul' });
  });
});
