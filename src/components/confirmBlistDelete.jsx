import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const ConfirmDelete = props => (
  <Modal
    show={props.showDeleteBucketList}
    bsSize="small"
  >
    <Modal.Header>
      <Modal.Title> Delete {props.name} </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Are you sure you want delete this ?</p>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        bsStyle="danger"
        onClick={() => props.deleteBucketList(props.selectedBucket, props.selectedItem)}
      >
        Delete
      </Button>
      <Button
        bsSize="large"
        bsStyle="success"
        onClick={props.onShowDeleteBucketList}
      >
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
);
ConfirmDelete.defaultProps = {
  selectedItem: null,
  selectedBucket: null,
};

ConfirmDelete.propTypes = {
  selectedBucket: PropTypes.number,
  selectedItem: PropTypes.number,
  showDeleteBucketList: PropTypes.bool.isRequired,
  deleteBucketList: PropTypes.func.isRequired,
  onShowDeleteBucketList: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ConfirmDelete;

