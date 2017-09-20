import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/nav_header';
import * as homeActions from '../actions';
import ResetPassword from '../components/resetpassword';
import BucketListContainer from './bucketlist';
import ItemContainer from './items';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    const { onShowResetPassword, signout } = this.props.homeActions;
    if (eventKey === 1.2) {
      onShowResetPassword();
    } else if (eventKey === 1.1) {
      signout();
    }
  }
  render() {
    const { auth, homeActions } = this.props;
    return (
      <div>
        <Header
          handleSelect={this.handleSelect}
        />
        <ResetPassword
          {...homeActions}
          {...auth}
        />
        <BucketListContainer />
        <ItemContainer />
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = dispatch => ({
  homeActions: bindActionCreators(homeActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export { Home };
