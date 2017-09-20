import React from 'react';
import renderer from 'react-test-renderer';
import SignUpForm from '../../components/signupform';

describe('banner snapshot ', () => {
  const props = {
    onShowSignUp: jest.fn(),
    onRepeatPasswordChange: jest.fn(),
    onUsernameChange: jest.fn(),
    registerUser: jest.fn(),
    onPasswordChange: jest.fn(),
    username: '',
    password: '',
    rpassword: '',
    showSignUp: false,
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <SignUpForm {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
