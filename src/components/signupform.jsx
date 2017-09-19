import React from 'react';
import PropTypes from 'prop-types';
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
      <Button
        bsSize="large"
        onClick={() => props.registerUser({username: props.username, password:props.password })}
        block
      >
        Sign Up
      </Button>
    </Modal.Footer>
  </Modal>
);

// SignUpForm.propTypes = {
//   show: PropTypes.bool.isRequired,
//   onSignUp: PropTypes.func.isRequired,
//   onSignUpShow: PropTypes.func.isRequired,
//   userChange: PropTypes.func.isRequired,
//   rpasswordChange: PropTypes.func.isRequired,
//   passwordChange: PropTypes.func.isRequired,
// };

export default SignUpForm;
