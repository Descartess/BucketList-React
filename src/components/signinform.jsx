import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

const SignInForm = props => (
  <Modal
    show={props.show}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.onSignInShow}>
      <Modal.Title>Sign In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Username"
            onChange={props.userChange}
            value={props.data.username}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="password"
            placeholder="Password"
            onChange={props.passwordChange}
            value={props.data.password}
          />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        onClick={props.onSignIn}
        block
      >
        Sign In
      </Button>
    </Modal.Footer>
  </Modal>
);

SignInForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onSignInShow: PropTypes.func.isRequired,
  userChange: PropTypes.func.isRequired,
  passwordChange: PropTypes.func.isRequired,
};

export default SignInForm;
