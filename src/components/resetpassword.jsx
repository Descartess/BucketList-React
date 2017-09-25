import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

const ResetPassword = props => (
  <Modal
    show={props.showResetPassword}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.onShowResetPassword}>
      Reset Password
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <FormControl
            type="text"
            value={props.username}
            onChange={props.onUsernameChange}
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="password"
            value={props.old_password}
            onChange={props.changeOldPassword}
            placeholder="Old Password"
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="password"
            value={props.new_password}
            placeholder="New Password"
            onChange={props.changeNewPassword}
          />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        block
        onClick={() => props.resetpassword({
          username: props.username,
          old_password: props.old_password,
          new_password: props.new_password,
        })}
      >
        Reset Password
      </Button>
    </Modal.Footer>
  </Modal>
);

ResetPassword.propTypes = {
  showResetPassword: PropTypes.bool.isRequired,
  onShowResetPassword: PropTypes.func.isRequired,
  changeNewPassword: PropTypes.func.isRequired,
  changeOldPassword: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  resetpassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  old_password: PropTypes.string.isRequired,
  new_password: PropTypes.string.isRequired,
};

export default ResetPassword;
