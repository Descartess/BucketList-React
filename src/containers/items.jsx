import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from '../components/header';
import AddBucketListItemForm from '../components/additem';
import ItemDetail from '../components/item_detail';
import { addBucketListItem,
  editBucketListItem,
  deleteBucketListItem,
} from '../actions';

class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditItem: false,
      showAddItem: false,
      item_name: '',
    };
    this.renderItems = this.renderItems.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.showAddItem = this.showAddItem.bind(this);
    this.submitBucketListItem = this.submitBucketListItem.bind(this);
    this.itemsDisplay = this.itemsDisplay.bind(this);
  }
  showAddItem() {
    this.setState({ showAddItem: !this.state.showAddItem });
  }
  nameChange(e) {
    this.setState({ item_name: e.target.value });
  }
  submitBucketListItem() {
    const { item_name } = this.state;
    const { selectedBucket } = this.props;
    this.props.addBucketListItem(selectedBucket, { name: item_name });
  }
  itemsDisplay(bucket) {
    const { items } = bucket;
    if (items.length < 1) {
      return (
        <div> No items in this Bucketlist</div>
      );
    }
    return items.map(item => (
      <ItemDetail
        key={item.id}
        {...item}
      />
    ),
    );
  }
  renderItems() {
    const { selectedBucket, bucketlists } = this.props;
    if (selectedBucket) {
      const bucket = _.find(bucketlists, n => n.id === selectedBucket);
      return (
        <div className="panel panel-default">
          <Header
            title={bucket.name}
            add={this.showAddItem}
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
    return (
      <div>
        <div className="col-md-6">
          {this.renderItems()}
        </div>
        <AddBucketListItemForm
          show={this.state.showAddItem}
          onNameChange={this.nameChange}
          data={this.state}
          close={this.showAddItem}
          addBucketListItem={this.submitBucketListItem}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { bucketlists, selectedBucket } = state.bucketlists;
  return { bucketlists, selectedBucket };
};
export default connect(mapStateToProps,
  { addBucketListItem,
    editBucketListItem,
    deleteBucketListItem,
  })(ItemContainer);
