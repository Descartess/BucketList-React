import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/header';

describe('Header snapshot', () => {
  const props = {
    onShowAddItem: jest.fn(),
    add: jest.fn(),
    title: '',
  };
  it(' Header component renders correctly', () => {
    const rendered = renderer.create(
      <Header {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
