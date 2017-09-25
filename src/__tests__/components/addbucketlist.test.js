import React from 'react';
import renderer from 'react-test-renderer';
import AddBucketListForm from '../../components/addbucketlist';

describe('Add bucketlist snapshot', () => {
  const props = {
    onShowAddBucketList: jest.fn(),
    postBucketList: jest.fn(),
    onChangeBucketListAge: jest.fn(),
    onChangeBucketListName: jest.fn(),
    bucketlist_age: 12,
    bucketlist_name: '',
    showAddBucketList: false,
  };
  it(' Add Bucketlist form renders correctly', () => {
    const rendered = renderer.create(
      <AddBucketListForm {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
