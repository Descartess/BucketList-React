import React from 'react';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';

const BucketListDetail = props => (
  <ListGroupItem
    onClick={() => props.selectBucketList({ id: props.id, name: props.name, completed_by: props.completed_by })}
  >
    {props.name}
    <div className="pull-right">
      <Glyphicon glyph="pencil" onClick={props.onShowEditBucketList} />
      <Glyphicon glyph="trash" onClick={props.onShowDeleteBucketList} />
    </div>
  </ListGroupItem>
);

export default BucketListDetail;
