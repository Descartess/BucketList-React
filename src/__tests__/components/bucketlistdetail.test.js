import React from 'react';
import renderer from 'react-test-renderer';
import BucketListDetail from '../../components/bucketlistdetail';

describe('banner snapshot ', () => {
  const props = {
    onShowEditBucketList: jest.fn(),
    onShowDeleteBucketList: jest.fn(),
    selectBucketList: jest.fn(),
    name: '',
    id: 2,
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <BucketListDetail {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
