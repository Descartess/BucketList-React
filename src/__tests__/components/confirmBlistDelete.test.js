import React from 'react';
import renderer from 'react-test-renderer';
import ConfirmDelete from '../../components/confirmBlistDelete';

describe('banner snapshot ', () => {
  const props = {
    onShowDeleteBucketList: jest.fn(),
    deleteBucketList: jest.fn(),
    selectedBucket: 1,
    selectedItem: 1,
    name: '',
    showDeleteBucketList: false,
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <ConfirmDelete {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
