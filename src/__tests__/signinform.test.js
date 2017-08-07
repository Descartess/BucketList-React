import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from '../components/signinform';

describe('<SignInForm />', () => {
  it('renders 1 <SignInForm /> component', () => {
    const data = { username: 'Paul' };
    const component = shallow(<SignInForm data={data} />);
    expect(component).toHaveLength(1);
  });
});

