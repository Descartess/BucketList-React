import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Banner = props => (
  <div className="jumbotron">
    <div className="row">
      <div className="col-md-8">
        <h1>BucketList</h1>
        <p>Track, Record and Share things you want to do before a certain age.</p>
      </div>
      <div className="col-md-4">
        <Button
          onClick={props.onSignIn}
          bsStyle="primary"
          bsSize="large"
          block
        >Sign In
        </Button>
        <Button
          onClick={props.onSignUp}
          bsStyle="success"
          bsSize="large"
          block
        >
          Sign Up
        </Button>
      </div>
    </div>
  </div>
);

Banner.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default Banner;
