import React from 'react';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';

const BucketListDetail = props => (
  <ListGroupItem onClick={() => props.selectBucketList(props.id)}>
    {props.name}
    <div className="pull-right">
      <Glyphicon glyph="pencil" onClick={props.onShowEditBucketList} />
      <Glyphicon glyph="trash" onClick={props.onShowDeleteBucketList} />
    </div>
  </ListGroupItem>
);

export default BucketListDetail;
