import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

const EditBucketListForm = props => (
  <Modal
    show={props.showEditBucketList}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.onShowEditBucketList}>
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

EditBucketListForm.defaultProps = {
  selectedBucket: null,
};

EditBucketListForm.propTypes = {
  showEditBucketList: PropTypes.bool.isRequired,
  onShowEditBucketList: PropTypes.func.isRequired,
  selectedBucket: PropTypes.number,
  putBucketList: PropTypes.func.isRequired,
  bucketlist_name: PropTypes.string.isRequired,
  bucketlist_age: PropTypes.number.isRequired,
  onChangeBucketListAge: PropTypes.func.isRequired,
  onChangeBucketListName: PropTypes.func.isRequired,
};

export default EditBucketListForm;
