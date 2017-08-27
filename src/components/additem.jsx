import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

const AddBucketListItemForm = props => (
  <Modal
    show={props.show}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.close}>
      <Modal.Title>Add Bucketlist Item </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="name"
            value={props.item_name}
            onChange={props.onNameChange}
          />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        block
        onClick={props.addBucketListItem}
      >
        Add Bucketlist Item
      </Button>
    </Modal.Footer>
  </Modal>
);

AddBucketListItemForm.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  addBucketListItem: PropTypes.func.isRequired,
};

export default AddBucketListItemForm;
