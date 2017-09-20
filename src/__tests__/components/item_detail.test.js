import React from 'react';
import renderer from 'react-test-renderer';
import ItemDetail from '../../components/item_detail';

describe('banner snapshot ', () => {
  const props = {
    selectBucketItem: jest.fn(),
    onShowEditItem: jest.fn(),
    onShowDeleteItem: jest.fn(),
    completed: false,
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <ItemDetail {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
