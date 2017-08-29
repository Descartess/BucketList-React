import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/nav_header';
import { resetpassword, signout } from '../actions';
import ResetPassword from '../components/resetpassword';
import BucketListContainer from './bucketlist';
import ItemContainer from './items';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      old_password: '',
      new_password: '',
      showResetPassword: false,
    };
    this.showResetPassword = this.showResetPassword.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.passwordreset = this.passwordreset.bind(this);
    this.changeOldPassword = this.changeOldPassword.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeNewPassword = this.changeNewPassword.bind(this);
  }
  showResetPassword() {
    this.setState({ showResetPassword: !this.state.showResetPassword });
  }
  changeOldPassword(e) {
    this.setState({ old_password: e.target.value });
  }
  changeNewPassword(e) {
    this.setState({ new_password: e.target.value });
  }
  changeUsername(e) {
    this.setState({ username: e.target.value });
  }
  passwordreset() {
    const { username, old_password, new_password } = this.state;
    this.props.resetpassword({ username, old_password, new_password });
    this.showResetPassword();
  }
  handleSelect(eventKey) {
    if (eventKey === 1.2) {
      this.showResetPassword();
    } else if (eventKey === 1.1) {
      this.props.signout();
    }
  }
  render() {
    return (
      <div>
        <Header
          handleSelect={this.handleSelect}
        />
        <ResetPassword
          showResetPassword={this.showResetPassword}
          show={this.state.showResetPassword}
          passwordreset={this.passwordreset}
          changeUsername={this.changeUsername}
          changeNewPassword={this.changeNewPassword}
          changeOldPassword={this.changeOldPassword}
          data={this.state}
        />
        <BucketListContainer />
        <ItemContainer />
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  const { bucketlists } = state.bucketlists;
  return { bucketlists };
};

export default connect(mapStateToProps, { resetpassword, signout })(Home);

export { Home };
