import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

const renderDetail = bucketlists => bucketlists.map(bucketlist => (
  <div key={bucketlist.id}>
    <ListGroupItem>
      {bucketlist.name}
      <div className="pull-right">
        <Glyphicon glyph="pencil" onClick={() => console.log('edit')} />
        <Glyphicon glyph="trash" onClick={() => console.log('delete')} />
      </div>
    </ListGroupItem>
  </div>
    ));

const BucketListDetail = (props) => {
  const { data } = props;
  return (
    <ListGroup>
      { renderDetail(data) }
    </ListGroup>
  );
};

export default BucketListDetail;
