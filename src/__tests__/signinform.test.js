import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from '../components/signinform';

describe('<SignInForm />', () => {
  it('renders 1 <SignInForm /> component', () => {
    const component = shallow(<SignInForm />);
    expect(component).toHaveLength(1);
  });
});

