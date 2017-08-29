import React from 'react';
import renderer from 'react-test-renderer';
import AddBucketListItemForm from '../../components/additem';

describe('add item component', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <AddBucketListItemForm />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
