import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup } from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';
import '../../node_modules/react-bootstrap-toggle/src/bootstrap2-toggle.css';


const EditBucketListItem = props => (
  <Modal
    show={props.show}
    bsSize="small"
  >
    <Modal.Header closeButton onHide={props.close}>
      <Modal.Title>{props.item_name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup>
          <h4>Completed 
          <div className="pull-right">
            <Toggle
              onClick={props.onToggle}
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
        onClick={props.editBucketItem}
      >
        Save Item
      </Button>
    </Modal.Footer>
  </Modal>
);

EditBucketListItem.propTypes = {
  show: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default EditBucketListItem;
