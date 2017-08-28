import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../containers/app';

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});

