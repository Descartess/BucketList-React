import React from 'react';
import renderer from 'react-test-renderer';
import ConfirmDelete from '../../components/confirm_delete';

describe('ConfirmDelete', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <ConfirmDelete />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
