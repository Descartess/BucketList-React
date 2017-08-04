import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const SignInForm = props => (
  <Modal
    show={props.show}
  >
    <Modal.Header>
      Sign In
    </Modal.Header>
    <Modal.Body>
      <p>This is the body</p>
    </Modal.Body>
    <Modal.Footer>
      <Button
        onClick={props.onSignIn}
      >
        Sign In
      </Button>
    </Modal.Footer>
  </Modal>
);

SignInForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

export default SignInForm;
