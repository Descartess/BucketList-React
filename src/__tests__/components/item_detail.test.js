import React from 'react';
import renderer from 'react-test-renderer';
import ItemDetail from '../../components/item_detail';

describe('edit item component', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <ItemDetail />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
