import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from '../components/header';

class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }
  renderItems() {
    const { selected_bucket, bucketlists } = this.props;
    if (selected_bucket) {
      return (<div />);
    }
    return (
      <div className="panel panel-default">
        <Header
          title="Items"
        />
        <div className="panel-body">
          <p> Click on bucketlist to display items </p>
        </div>
      </div>);
  }
  render() {
    return (
      <div className="col-md-6">
        {this.renderItems()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { bucketlists, selected_bucket } = state.bucketlists;
  return { bucketlists, selected_bucket };
};
export default connect(mapStateToProps)(ItemContainer);
