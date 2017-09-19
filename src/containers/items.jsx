import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

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
    const { selectedBucket, bucketlists } = this.props.bucketlistsContainer;
    const { itemActions } = this.props;
    if (selectedBucket) {
      const bucket = _.find(bucketlists, n => n.id === selectedBucket);
      return (
        <div className="panel panel-default">
          <Header
            {...itemActions}
            title={bucket.name}
            add
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
    const { selectedBucket, selectedItem } = this.props.bucketlistsContainer;
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
          selectedItem={selectedItem}
        />
        <EditBucketListItem
          {...itemActions}
          {...itemsContainer}
          selectedBucket={selectedBucket}
          selectedItem={selectedItem}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { bucketlistsContainer, itemsContainer } = state;
  return { bucketlistsContainer, itemsContainer };
};

const mapDispatchToProps = dispatch => ({
  itemActions: bindActionCreators(actions, dispatch),
});

ItemContainer.defaultProps = {
  selectedBucket: null,
  selectedItem: null,
};

ItemContainer.propTypes = {
  selectedBucket: PropTypes.number,
  selectedItem: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

export { ItemContainer };
