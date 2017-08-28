import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser, signinUser } from '../actions';
import Banner from '../components/banner';

import SignInForm from '../components/signinform';
import SignUpForm from '../components/signupform';

class Authenticate extends Component {
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
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }
  onSignInShow() {
    this.setState({ showSignIn: !this.state.showSignIn });
  }

  onSignIn() {
    const { username, password } = this.state;
    this.props.signinUser({ username, password });
  }

  onSignUp() {
    const { username, password } = this.state;
    this.props.registerUser({ username, password });
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
    return (
      <div>
        <Banner
          onSignInShow={this.onSignInShow}
          onSignUpShow={this.onSignUpShow}
        />
        <SignInForm
          data={this.state}
          show={this.state.showSignIn}
          onSignIn={this.onSignIn}
          onSignInShow={this.onSignInShow}
          userChange={this.handleUsernameInput}
          passwordChange={this.handlePasswordInput}
        />
        <SignUpForm
          data={this.state}
          show={this.state.showSignUp}
          onSignUp={this.onSignUp}
          onSignUpShow={this.onSignUpShow}
          userChange={this.handleUsernameInput}
          passwordChange={this.handlePasswordInput}
          rpasswordChange={this.handleRepeatPasswordInput}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading } = state.auth;
  return { loading };
};

// Authenticate.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   registerUser: PropTypes.func.isRequired,
//   signinUser: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, { registerUser, signinUser })(Authenticate);

export { Authenticate };
