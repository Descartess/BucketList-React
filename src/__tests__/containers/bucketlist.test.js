import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { BucketListContainer } from '../../containers/bucketlist';


describe('Home', () => {
  const mockStore = configureMockStore();
  const initialState = {};
  it('renders correctly', () => {
    const store = mockStore(initialState);
    const props = { getBucketLists: jest.fn(),
      bucketlists: [],
    };
    const component = shallow(<BucketListContainer store={store} {...props} />);
    expect(component).toHaveLength(1);
  });
});
