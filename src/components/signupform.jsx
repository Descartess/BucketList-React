import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const SignUpForm = props => (
  <Modal
    show={props.show}
  >
    <Modal.Header>
      Sign Up
    </Modal.Header>
    <Modal.Body>
      <p>This is the body</p>
    </Modal.Body>
    <Modal.Footer>
      <Button
        onClick={props.onSignUp}
      >
        Sign Up
      </Button>
    </Modal.Footer>
  </Modal>
);

SignUpForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default SignUpForm;
