import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const Header = props => (
  <div className="panel-heading">
    BucketLists
    <div className="pull-right" id="addBucket" onClick={props.showAddBucketList}>
      <Glyphicon glyph="plus" /> Add
    </div>
  </div>
);

export default Header;
