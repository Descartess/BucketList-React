import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../../components/spinner';

describe(' Spinner renders correctly', () => {
  it('renders spinner correctly', () => {
    const rendered = renderer.create(<Spinner />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
