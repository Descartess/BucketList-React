import React from 'react';
import { ListGroupItem, Glyphicon, Checkbox } from 'react-bootstrap';

const ItemDetail = props => (
  <ListGroupItem onClick={() => props.onSelect(props.id)}>
    <Checkbox checked={props.completed} inline >
      {props.name}
    </Checkbox>
    <div className="pull-right">
      <Glyphicon glyph="pencil" onClick={props.edit} />
      <Glyphicon glyph="trash" onClick={props.delete} />
    </div>
  </ListGroupItem>
);

export default ItemDetail;
