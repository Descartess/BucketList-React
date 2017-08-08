import React, { Component } from 'react';

import Authenticate from './authenticate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
  }
  render() {
    return (
      <div>
        <Authenticate />
      </div>
    );
  }
}

export default App;
