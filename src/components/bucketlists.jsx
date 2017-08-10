import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const renderBucketLists = (bucketlists) => {
  if (bucketlists.length < 1) {
    return (
      <div>
        <p>No bucketlists added, create a new bucketlist </p>
      </div>
    );
  }
  return (
    <div>
      <p>Bucketlist Items</p>
    </div>
  );
};

const BucketLists = (props) => {
  const { bucketlists } = props;
  return (
    <div className="col-md-6 col-md-offset-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          BucketLists
            <div className="pull-right" id="addBucket" onClick={props.showAddBucketList}>
              <Glyphicon glyph="plus" /> Add
            </div>
        </div>
        <div className="panel-body">
          {renderBucketLists(bucketlists)}
        </div>
      </div>
    </div>
  );
};

export default BucketLists;
