import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './spinner';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

const SignUpForm = props => (
  <Modal
    show={props.showSignUp}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.onShowSignUp}>
      Sign Up
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
        <FormGroup>
          <FormControl
            type="password"
            placeholder="Repeat Password"
            onChange={props.onRepeatPasswordChange}
            value={props.rpassword}
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
          onClick={() => props.registerUser({ username: props.username, password: props.password })}
          block
        >
        Sign Up
      </Button>
      )
      }
    </Modal.Footer>
  </Modal>
);

SignUpForm.propTypes = {
  onShowSignUp: PropTypes.func.isRequired,
  onRepeatPasswordChange: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  error_msg: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rpassword: PropTypes.string.isRequired,
  showSignUp: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};


export default SignUpForm;
