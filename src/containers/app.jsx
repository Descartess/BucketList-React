import React, { Component } from 'react';
import Banner from '../components/banner';
import SignInForm from '../components/signinform';
import SignUpForm from '../components/signupform';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signin: false,
      signup: false,
    };
    this.onSignInClick = this.onSignInClick.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }
  onSignInClick() {
    this.setState({ signin: !this.state.signin });
  }

  onSignUpClick() {
    this.setState({ signup: !this.state.signup });
  }

  render() {
    return (
      <div>
        <Banner
          onSignIn={this.onSignInClick}
          onSignUp={this.onSignUpClick}
        />
        <SignInForm
          show={this.state.signin}
          onSignIn={this.onSignInClick}
        />
        <SignUpForm
          show={this.state.signup}
          onSignUp={this.onSignUpClick}
        />
      </div>
    );
  }
}

export default App;
