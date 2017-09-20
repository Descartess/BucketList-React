import React from 'react';
import renderer from 'react-test-renderer';
import EditBucketListItem from '../../components/editItem';

describe('banner snapshot ', () => {
  const props = {
    onShowEditItem: jest.fn(),
    onToggleCompleted: jest.fn(),
    editBucketListItem: jest.fn(),
    onUsernameChange: jest.fn(),
    item_name: '',
    completed: false,
    showEditItem: false,
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <EditBucketListItem {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
