import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

const EditBucketListForm = props => (
  <Modal
    show={props.show}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.showEditBucketList}>
      <Modal.Title>Edit Bucketlist </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="name"
            value={props.data.bucketlist_name}
            onChange={props.onNameChange}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="number"
            placeholder="Enter age of completion"
            value={props.data.bucketlist_age}
            onChange={props.onAgeChange}
          />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        block
        onClick={props.editBucketList}
      >
        Edit Bucketlist
      </Button>
    </Modal.Footer>
  </Modal>
);

EditBucketListForm.propTypes = {
  show: PropTypes.bool.isRequired,
  showEditBucketList: PropTypes.func.isRequired,
  editBucketList: PropTypes.func.isRequired,
};

export default EditBucketListForm;
