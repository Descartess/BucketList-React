import React from 'react';
import renderer from 'react-test-renderer';
import AddBucketListItemForm from '../../components/additem';

describe('Add bucketlist item snapshot', () => {
  const props = {
    onShowAddItem: jest.fn(),
    onNameChange: jest.fn(),
    addBucketListItem: jest.fn(),
    selectedBucket: 12,
    item_name: '',
    showAddItem: false,
  };
  it(' Add Bucketlist Item form renders correctly', () => {
    const rendered = renderer.create(
      <AddBucketListItemForm {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
