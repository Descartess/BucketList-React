import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

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
      <Button
        bsSize="large"
        onClick={() => props.signinUser({ username: props.username, password: props.password })}
        block
      >
        Sign In
      </Button>
    </Modal.Footer>
  </Modal>
);

// SignInForm.propTypes = {
//   show: PropTypes.bool.isRequired,
//   onSignIn: PropTypes.func.isRequired,
//   onSignInShow: PropTypes.func.isRequired,
//   userChange: PropTypes.func.isRequired,
//   passwordChange: PropTypes.func.isRequired,
// };

export default SignInForm;
