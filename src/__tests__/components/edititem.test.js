import React from 'react';
import renderer from 'react-test-renderer';
import EditBucketListItem from '../../components/editItem';

describe('edit item component', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <EditBucketListItem />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
