import React from 'react';
import renderer from 'react-test-renderer';
import EditBucketListForm from '../../components/editbucketlist';

describe('Edit bucketlist snap shot ', () => {
  const props = {
    onChangeBucketListName: jest.fn(),
    onChangeBucketListAge: jest.fn(),
    onShowEditBucketList: jest.fn(),
    putBucketList: jest.fn(),
    bucketlist_name: '',
    bucketlist_age: 2,
    showEditBucketList: false,
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <EditBucketListForm {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
