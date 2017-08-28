import React, { Component } from 'react';
import { connect } from 'react-redux';
import Authenticate from './authenticate';
import Home from './home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
  }
  renderScreen() {
    const { authenticated, token } = this.props;
    if (authenticated && token) {
      return (<Home />);
    }
    return (<Authenticate />);
  }
  render() {
    return (
      <div>
       { this.renderScreen() }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { authenticated, token } = state.auth;
  return { authenticated, token };
};
export default connect(mapStateToProps)(App);

export { App }
