import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';

import Header from '../components/header';
import AddBucketListItemForm from '../components/additem';
import ItemDetail from '../components/item_detail';
import EditBucketListItem from '../components/editItem';
import ConfirmDelete from '../components/confirm_delete';
import * as actions from '../actions';


class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
    this.itemsDisplay = this.itemsDisplay.bind(this);
  }

  itemsDisplay(bucket) {
    const { items } = bucket;
    const { itemActions } = this.props;
    if (items.length < 1) {
      return (
        <div> No items in this Bucketlist</div>
      );
    }
    return items.map(item => (
      <ItemDetail
        key={item.id}
        {...item}
        {...itemActions}
      />
    ),
    );
  }
  renderItems() {
    const { selectedBucket, bucketlists } = this.props.bucketlists;
    if (selectedBucket) {
      const bucket = _.find(bucketlists, n => n.id === selectedBucket);
      return (
        <div className="panel panel-default">
          <Header
            title={bucket.name}
            add={this.props.itemActions.onShowAddItem}
          />
          <div className="panel-body">
            {this.itemsDisplay(bucket)}
          </div>
        </div>);
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
    const { itemsContainer, itemActions } = this.props;
    const { selectedBucket, selected_item } = this.props.bucketlists;
    return (
      <div>
        <div className="col-md-6">
          {this.renderItems()}
        </div>
        <AddBucketListItemForm
          {...itemActions}
          {...itemsContainer}
          selectedBucket={selectedBucket}
        />
        <ConfirmDelete
          {...itemsContainer}
          {...itemActions}
          name="BucketList Item"
          selectedBucket={selectedBucket}
          selected_item={selected_item}
        />
        <EditBucketListItem
          {...itemActions}
          {...itemsContainer}
          selectedBucket={selectedBucket}
          selected_item={selected_item}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { bucketlists, itemsContainer } = state;
  return { bucketlists, itemsContainer };
};

const mapDispatchToProps = dispatch => ({
  itemActions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

export { ItemContainer };
