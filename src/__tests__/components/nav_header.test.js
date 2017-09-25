import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/nav_header';

describe('banner snapshot ', () => {
  const props = {
    handleSelect: jest.fn(),
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Header {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
