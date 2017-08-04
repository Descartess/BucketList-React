import React from 'react';
import { shallow } from 'enzyme';
import Banner from '../components/banner';

describe('<Banner />', () => {
  it('renders 1 <Banner /> component', () => {
    const component = shallow(<Banner />);
    expect(component).toHaveLength(1);
  });
});

