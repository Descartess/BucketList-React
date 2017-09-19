import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

const EditBucketListForm = props => (
  <Modal
    show={props.showEditBucketList}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={() => props.onShowEditBucketList()}>
      <Modal.Title>Edit Bucketlist </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="name"
            value={props.bucketlist_name}
            onChange={props.onChangeBucketListName}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="number"
            placeholder="Enter age of completion"
            value={props.bucketlist_age}
            onChange={props.onChangeBucketListAge}
          />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        block
        onClick={() => props.putBucketList(props.selectedBucket,
          {
            name: props.bucketlist_name,
            completed_by: props.bucketlist_age,
          })}
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
