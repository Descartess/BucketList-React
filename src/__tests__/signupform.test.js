import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from '../components/signupform';

describe('<SignUpForm />', () => {
  it('renders 1 <SignUpForm /> component', () => {
    const component = shallow(<SignUpForm />);
    expect(component).toHaveLength(1);
  });
});

