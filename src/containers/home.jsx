import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import ResetPassword from '../components/resetpassword';
import BucketListContainer from './bucketlist';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResetPassword: false,
    };
    this.showResetPassword = this.showResetPassword.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  showResetPassword() {
    this.setState({ showResetPassword: !this.state.showResetPassword });
  }
  handleSelect(eventKey) {
    if (eventKey === 1.2) {
      this.showResetPassword();
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
        />
        <BucketListContainer />
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  const { bucketlists } = state.bucketlists;
  return { bucketlists };
};

export default connect(mapStateToProps)(Home);
