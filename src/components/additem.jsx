import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

const AddBucketListItemForm = props => (
  <Modal
    show={props.showAddItem}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={() => props.onShowAddItem()}>
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
        onClick={() => props.addBucketListItem(props.selectedBucket, { name: props.item_name })}
      >
        Add Bucketlist Item
      </Button>
    </Modal.Footer>
  </Modal>
);
AddBucketListItemForm.defaultProps = {
  selectedBucket: null,
};

AddBucketListItemForm.propTypes = {
  showAddItem: PropTypes.bool.isRequired,
  onShowAddItem: PropTypes.func.isRequired,
  selectedBucket: PropTypes.number,
  item_name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  addBucketListItem: PropTypes.func.isRequired,
};

export default AddBucketListItemForm;
