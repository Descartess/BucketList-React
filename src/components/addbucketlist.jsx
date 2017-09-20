import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';

const AddBucketListForm = props => (
  <Modal
    show={props.showAddBucketList}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={() => props.onShowAddBucketList()}>
      <Modal.Title>Add Bucketlist </Modal.Title>
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
        onClick={() => props.postBucketList({
          name: props.bucketlist_name,
          completed_by: props.bucketlist_age,
        })
        }
      >
        Add Bucketlist
      </Button>
    </Modal.Footer>
  </Modal>
);

AddBucketListForm.propTypes = {
  showAddBucketList: PropTypes.bool.isRequired,
  onShowAddBucketList: PropTypes.func.isRequired,
  bucketlist_name: PropTypes.string.isRequired,
  bucketlist_age: PropTypes.number.isRequired,
  onChangeBucketListName: PropTypes.func.isRequired,
  onChangeBucketListAge: PropTypes.func.isRequired,
  postBucketList: PropTypes.func.isRequired,
};

export default AddBucketListForm;
