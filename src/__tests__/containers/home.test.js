import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Home } from '../../containers/home';


describe('Home', () => {
  const mockStore = configureMockStore();
  const initialState = {};
  it('renders correctly', () => {
    const store = mockStore(initialState);
    const component = shallow(<Home store={store} />);
    expect(component).toHaveLength(1);
  });
});
