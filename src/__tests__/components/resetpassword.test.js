import React from 'react';
import renderer from 'react-test-renderer';
import ResetPassword from '../../components/resetpassword';

describe('banner snapshot ', () => {
  const props = {
    onShowResetPassword: jest.fn(),
    changeNewPassword: jest.fn(),
    changeOldPassword: jest.fn(),
    onUsernameChange: jest.fn(),
    resetpassword: jest.fn(),
    old_password: '',
    username: '',
    new_password: '',
    showResetPassword: false,
  };
  it('renders correctly', () => {
    const rendered = renderer.create(
      <ResetPassword {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
