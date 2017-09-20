export const onShowEditItem = () => ({
  type: 'SHOW_EDIT_ITEM',
});

export const onShowAddItem = () => ({
  type: 'SHOW_ADD_ITEM',
});

export const onShowDeleteItem = () => ({
  type: 'SHOW_DELETE_ITEM',
});

export const onToggleCompleted = () => ({
  type: 'TOGGLE_COMPLETED',
});

export const onNameChange = e => ({
  type: 'ON_NAME_CHANGE',
  payload: e.target.value,
});

