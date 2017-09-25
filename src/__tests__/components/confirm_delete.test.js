import React from 'react';
import renderer from 'react-test-renderer';
import ConfirmDelete from '../../components/confirm_delete';

describe('banner snapshot ', () => {
  const props = {
    onShowDeleteItem: jest.fn(),
    deleteBucketListItem: jest.fn(),
    selectedBucket: 1,
    selectedItem: 1,
    item_name: '',
    showDeleteItem: false,
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <ConfirmDelete {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
