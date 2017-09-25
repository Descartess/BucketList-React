import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducers from '../../reducers';
import promiseMiddleware from 'redux-promise-middleware';
import renderer from 'react-test-renderer';
import { App } from '../../containers/app';

describe('App snapshot ', () => {
  const middlewares = [thunk, promiseMiddleware()];
  const mockStore = configureMockStore(middlewares, reducers);
  const props = {};
  // const initialState = {};
  const store = mockStore();
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Provider store={store} >
        <App {...props} />
      </Provider>,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
