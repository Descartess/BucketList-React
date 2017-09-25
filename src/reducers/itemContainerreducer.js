export const initialState = {
  showEditItem: false,
  showAddItem: false,
  showDeleteItem: false,
  item_name: '',
  completed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_EDIT_ITEM':
      return { ...state, showEditItem: !state.showEditItem };
    case 'SHOW_ADD_ITEM':
      return { ...state, showAddItem: !state.showAddItem, item_name: '' };
    case 'SHOW_DELETE_ITEM':
      return { ...state, showDeleteItem: !state.showDeleteItem };
    case 'TOGGLE_COMPLETED':
      return { ...state, completed: !state.completed };
    case 'SELECT_ITEM':
      return { ...state, item_name: action.payload.name };
    case 'ON_NAME_CHANGE':
      return { ...state, item_name: action.payload };
    default:
      return state;
  }
};
