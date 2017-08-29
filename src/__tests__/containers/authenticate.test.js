import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Authenticate } from '../../containers/authenticate';

describe('<Authenticate />', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Authenticate />,
      );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('updates state when sign in button is clicked', () => {
    const component = mount(<Authenticate />);
    expect(component.state().showSignIn).toBeFalsy();
    component.find('button').at(0).simulate('click');
    expect(component.state().showSignIn).toBeTruthy();
  });
  it('updates state when sign up button is clicked', () => {
    const component = mount(<Authenticate />);
    expect(component.state().showSignUp).toBeFalsy();
    component.instance().onSignUpShow();
    expect(component.state().showSignUp).toBeTruthy();
  });
});
