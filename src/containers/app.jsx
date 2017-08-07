import React, { Component } from 'react';
import Banner from '../components/banner';

import SignInForm from '../components/signinform';
import SignUpForm from '../components/signupform';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false,
      username: '',
      password: '',
      rpassword: '',

    };
    this.onSignInShow = this.onSignInShow.bind(this);
    this.onSignUpShow = this.onSignUpShow.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleRepeatPasswordInput = this.handleRepeatPasswordInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }
  onSignInShow() {
    this.setState({ showSignIn: !this.state.showSignIn });
  }

  onSignUpShow() {
    this.setState({ showSignUp: !this.state.showSignUp });
  }

  handleUsernameInput(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordInput(e) {
    this.setState({ password: e.target.value });
  }

  handleRepeatPasswordInput(e) {
    this.setState({ rpassword: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Banner
          onSignIn={this.onSignInShow}
          onSignUp={this.onSignUpShow}
        />
        <SignInForm
          data={this.state}
          show={this.state.showSignIn}
          onSignIn={this.onSignInShow}
          userChange={this.handleUsernameInput}
          passwordChange={this.handlePasswordInput}
        />
        <SignUpForm
          data={this.state}
          show={this.state.showSignUp}
          onSignUp={this.onSignUpShow}
          userChange={this.handleUsernameInput}
          passwordChange={this.handlePasswordInput}
          rpasswordChange={this.handleRepeatPasswordInput}
        />
      </div>
    );
  }
}

export default App;
