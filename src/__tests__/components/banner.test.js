import React from 'react';
import renderer from 'react-test-renderer';
import Banner from '../../components/banner';

describe('banner snapshot ', () => {
  const props = {
    onShowSignUp: jest.fn(),
    onShowSignIn: jest.fn(),
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Banner {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
