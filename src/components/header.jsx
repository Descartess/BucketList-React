import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const Header = (props) => (
  <div className="panel-heading">
    {props.title}
    {props.add &&
      <div className="pull-right" id="addBucket" onClick={() => props.onShowAddItem()}>
        <Glyphicon glyph="plus" /> Add
      </div>}
  </div>
  );

export default Header;
