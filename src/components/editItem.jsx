import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup } from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';
import '../../node_modules/react-bootstrap-toggle/src/bootstrap2-toggle.css';


const EditBucketListItem = props => (
  <Modal
    show={props.showEditItem}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={() => props.onShowEditItem()}>
      <Modal.Title>{props.item_name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <h4>Completed
          <div className="pull-right">
            <Toggle
              onClick={() => props.onToggleCompleted()}
              on={<h6>True</h6>}
              off={<h6>False</h6>}
              size="xs"
              offstyle="danger"
              active={props.completed}
            />
          </div>
          </h4>
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        block
        onClick={() => props.editBucketListItem(props.selectedBucket, props.selectedItem,
        { name: props.item_name, completed: props.completed })}
      >
        Save Item
      </Button>
    </Modal.Footer>
  </Modal>
);
EditBucketListItem.defaultProps = {
  selectedItem: null,
  selectedBucket: null,
};

EditBucketListItem.propTypes = {
  selectedBucket: PropTypes.number,
  selectedItem: PropTypes.number,
  completed: PropTypes.bool.isRequired,
  showEditItem: PropTypes.bool.isRequired,
  onShowEditItem: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  editBucketListItem: PropTypes.func.isRequired,
  item_name: PropTypes.string.isRequired,
};

export default EditBucketListItem;
