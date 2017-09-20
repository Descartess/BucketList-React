import React from 'react';
import renderer from 'react-test-renderer';
import SignUpForm from '../../components/signinform';

describe('banner snapshot ', () => {
  const props = {
    onShowSignIn: jest.fn(),
    onUsernameChange: jest.fn(),
    signinUser: jest.fn(),
    onPasswordChange: jest.fn(),
    username: '',
    password: '',
    showSignIn: false,
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <SignUpForm {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
