import React from 'react';
import { ListGroupItem, Glyphicon, Checkbox } from 'react-bootstrap';

const ItemDetail = props => (
  <ListGroupItem onClick={() => props.selectBucketItem(props.id)}>
    <Checkbox checked={props.completed} inline >
      {props.name}
    </Checkbox>
    <div className="pull-right">
      <Glyphicon glyph="pencil" onClick={() => props.onShowEditItem()} />
      <Glyphicon glyph="trash" onClick={() => props.onShowDeleteItem()} />
    </div>
  </ListGroupItem>
);

export default ItemDetail;
