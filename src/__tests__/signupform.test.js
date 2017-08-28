import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from '../components/signupform';

describe('<SignUpForm />', () => {
  it('renders 1 <SignUpForm /> component', () => {
    const data = { username: 'Paul' };
    const component = shallow(<SignUpForm data={data} />);
    expect(component).toHaveLength(1);
  });
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../containers/app';

// jest.mock('react-dom', () => ({ render: jest.fn() }));

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   global.document.getElementById = id => id === 'root' && div;
//   expect(ReactDOM.render).toHaveBeenCalledWith(<App />, <div />);
// });

