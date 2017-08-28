import React from 'react';
import renderer from 'react-test-renderer';
import { Authenticate } from '../containers/authenticate';

describe('Authenticate component renders correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Authenticate />,
      );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
