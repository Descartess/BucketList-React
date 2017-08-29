import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { ItemContainer } from '../../containers/items';

describe('ItemContainer', () => {
  const mockStore = configureMockStore();
  const initialState = {};
  it('renders correctly', () => {
    const store = mockStore(initialState);
    const component = shallow(<ItemContainer store={store} />);
    expect(component).toHaveLength(1);
  });
});
