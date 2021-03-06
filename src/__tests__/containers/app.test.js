import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import renderer from 'react-test-renderer';
import App from '../../containers/app';
import reducers from '../../reducers';


const middleware = applyMiddleware(thunk, promiseMiddleware());

const testStore = createStore(reducers, middleware);

describe('App snapshot ', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Provider store={testStore} >
        <App />
      </Provider>,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
