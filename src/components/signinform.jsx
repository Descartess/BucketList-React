import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';
import Spinner from './spinner';

const SignInForm = props => (
  <Modal
    show={props.showSignIn}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.onShowSignIn}>
      <Modal.Title>Sign In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Username"
            onChange={props.onUsernameChange}
            value={props.username}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="password"
            placeholder="Password"
            onChange={props.onPasswordChange}
            value={props.password}
          />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      {props.error ? (
        <p style={{ color: 'red', textAlign: 'center' }} > {props.error_msg} </p>
    ) : (null)}
      {props.loading ? (
        <Spinner />
        ) : (
        <Button
          bsSize="large"
          onClick={() => props.signinUser({ username: props.username, password: props.password })}
          block
        >
        Sign In
        </Button>
    )}
    </Modal.Footer>
  </Modal>
);

SignInForm.propTypes = {
  onShowSignIn: PropTypes.func.isRequired,
  signinUser: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  error_msg: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showSignIn: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SignInForm;
