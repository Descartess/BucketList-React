import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

const SignUpForm = props => (
  <Modal
    show={props.show}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.onSignUpShow}>
      Sign Up
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
        <FormGroup>
          <FormControl
            type="password"
            placeholder="Repeat Password"
            onChange={props.rpasswordChange}
            value={props.data.rpassword}
          />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        onClick={props.onSignUp}
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
