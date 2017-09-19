import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import * as authActions from '../actions/authactions';
import Banner from '../components/banner';

import SignInForm from '../components/signinform';
import SignUpForm from '../components/signupform';

class Authenticate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { auth, authActions } = this.props;
    return (
      <div>
        <Banner
          {...authActions}
        />
        <SignInForm
          {...auth}
          {...authActions}
        />
        <SignUpForm
          {...auth}
          {...authActions}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});


// Authenticate.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   registerUser: PropTypes.func.isRequired,
//   signinUser: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);

export { Authenticate };
