import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const ConfirmDelete = props => (
  <Modal
    show={props.showDeleteItem}
    bsSize="small"
  >
    <Modal.Header>
      <Modal.Title> Delete {props.item_name} </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Are you sure you want delete this ?</p>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        bsStyle="danger"
        onClick={() => props.deleteBucketListItem(props.selectedBucket, props.selectedItem)}
      >
        Delete
      </Button>
      <Button
        bsSize="large"
        bsStyle="success"
        onClick={props.onShowDeleteItem}
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
  showDeleteItem: PropTypes.bool.isRequired,
  onShowDeleteItem: PropTypes.func.isRequired,
  deleteBucketListItem: PropTypes.func.isRequired,
  item_name: PropTypes.string.isRequired,
};

export default ConfirmDelete;

