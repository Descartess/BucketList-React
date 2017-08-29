import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from '../components/header';
import AddBucketListItemForm from '../components/additem';
import ItemDetail from '../components/item_detail';
import EditBucketListItem from '../components/editItem';
import ConfirmDelete from '../components/confirm_delete';
import { addBucketListItem,
  editBucketListItem,
  deleteBucketListItem,
  selectBucketItem,
} from '../actions';

class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditItem: false,
      showAddItem: false,
      showDeleteItem: false,
      item_name: '',
      completed: false,
    };
    this.renderItems = this.renderItems.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.showAddItem = this.showAddItem.bind(this);
    this.submitBucketListItem = this.submitBucketListItem.bind(this);
    this.itemsDisplay = this.itemsDisplay.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.showEditItem = this.showEditItem.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.editBucketItem = this.editBucketItem.bind(this);
  }
  showAddItem() {
    this.setState({ showAddItem: !this.state.showAddItem });
  }
  onToggle() {
    this.setState({ completed: !this.state.completed });
  }
  nameChange(e) {
    this.setState({ item_name: e.target.value });
  }
  submitBucketListItem() {
    const { item_name } = this.state;
    const { selectedBucket } = this.props;
    this.props.addBucketListItem(selectedBucket, { name: item_name });
  }
  showEditItem(item) {
    console.log(item);
    this.setState({
      item_name: item.name,
      completed: item.completed,
      showEditItem: !this.state.showEditItem,
    });
  }
  showDelete() {
    this.setState({ showDeleteItem: !this.state.showDeleteItem });
  }
  editBucketItem() {
    const { completed, item_name } = this.state;
    const { selectedBucket, selected_item } = this.props;
    this.props.editBucketListItem(selectedBucket, selected_item, {
      name: item_name,
      completed,
    });
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
        onSelect={() => this.props.selectBucketItem(item.id)}
        edit={() => this.showEditItem(item)}
        delete={this.showDelete}
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
    const { selectedBucket, selected_item } = this.props;
    return (
      <div>
        <div className="col-md-6">
          {this.renderItems()}
        </div>
        <AddBucketListItemForm
          show={this.state.showAddItem}
          onNameChange={this.nameChange}
          {...this.state}
          close={this.showAddItem}
          addBucketListItem={this.submitBucketListItem}
        />
        <ConfirmDelete
          show={this.state.showDeleteItem}
          name="BucketList Item"
          cancel={this.showDelete}
          delete={() => this.props.deleteBucketListItem(selectedBucket, selected_item)}
        />
        <EditBucketListItem
          {...this.state}
          close={() => this.setState({ showEditItem: !this.state.showEditItem })}
          show={this.state.showEditItem}
          onNameChange={this.nameChange}
          onToggle={this.onToggle}
          editBucketItem={this.editBucketItem}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { bucketlists, selectedBucket, selected_item } = state.bucketlists;
  return { bucketlists, selectedBucket, selected_item };
};
export default connect(mapStateToProps,
  { addBucketListItem,
    editBucketListItem,
    deleteBucketListItem,
    selectBucketItem,
  })(ItemContainer);

export { ItemContainer };
