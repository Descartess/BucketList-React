import React from 'react';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';

const BucketListDetail = props => (
  <ListGroupItem onClick={props.select}>
    {props.name}
    <div className="pull-right">
      <Glyphicon glyph="pencil" onClick={props.edit} />
      <Glyphicon glyph="trash" onClick={props.delete} />
    </div>
  </ListGroupItem>
);

export default BucketListDetail;
