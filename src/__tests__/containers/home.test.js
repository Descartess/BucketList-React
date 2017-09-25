import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import renderer from 'react-test-renderer';
import moxios from 'moxios';
import instance from '../../config/axiosconfig';
import Home from '../../containers/home';
import reducers from '../../reducers';

const middleware = applyMiddleware(thunk, promiseMiddleware());

const testStore = createStore(reducers, middleware);

describe('App snapshot ', () => {
  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
  it('renders correctly', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });
    const rendered = renderer.create(
      <Provider store={testStore} >
        <Home />
      </Provider>,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
