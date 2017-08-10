import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

const ResetPassword = props => (
  <Modal
    show={props.show}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.showResetPassword}>
      Reset Password
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="password"
            placeholder="Old Password"
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="password"
            placeholder="New Password"
          />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        block
      >
        Reset Password
      </Button>
    </Modal.Footer>
  </Modal>
);

ResetPassword.propTypes = {
  show: PropTypes.bool.isRequired,
  showResetPassword: PropTypes.func.isRequired,
};

export default ResetPassword;
