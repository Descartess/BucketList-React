import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

const AddBucketListForm = props => (
  <Modal
    show={props.show}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.showAddBucketList}>
      <Modal.Title>Add Bucketlist </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="name"
            value={props.bucketlist_name}
            onChange={props.onNameChange}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="number"
            placeholder="Enter age of completion"
            value={props.bucketlist_age}
            onChange={props.onAgeChange}
          />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        block
        onClick={props.addBucketList}
      >
        Add Bucketlist
      </Button>
    </Modal.Footer>
  </Modal>
);

AddBucketListForm.propTypes = {
  show: PropTypes.bool.isRequired,
  showAddBucketList: PropTypes.func.isRequired,
  addBucketList: PropTypes.func.isRequired,
};

export default AddBucketListForm;
