import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/bucketlist_header';
import BucketListDetail from '../components/bucketlistdetail';
import AddBucketListForm from '../components/addbucketlist';
import ConfirmDelete from '../components/confirm_delete';
import EditBucketListForm from '../components/editbucketlist';
import { getBucketLists, postBucketList } from '../actions';

class BucketListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedList: null,
      showAddBucketList: false,
      showEditBucketList: false,
      showDeleteBucketList: false,
      bucketlist_name: '',
      bucketlist_age: '',
    };
    this.showAddBucketList = this.showAddBucketList.bind(this);
    this.changeBucketListname = this.changeBucketListname.bind(this);
    this.changeBucketListage = this.changeBucketListage.bind(this);
    this.showDeleteBucketList = this.showDeleteBucketList.bind(this);
    this.showEditBucketList = this.showEditBucketList.bind(this);
  }
  componentWillMount() {
    this.props.getBucketLists();
  }
  changeBucketListname(e) {
    this.setState({ bucketlist_name: e.target.value });
  }
  changeBucketListage(e) {
    this.setState({ bucketlist_age: e.target.value });
  }
  showAddBucketList() {
    this.setState({ showAddBucketList: !this.state.showAddBucketList });
  }
  showEditBucketList() {
    this.setState({ showEditBucketList: !this.state.showEditBucketList });
  }
  showDeleteBucketList() {
    this.setState({ showDeleteBucketList: !this.state.showDeleteBucketList });
  }
  addBucketList() {
    const { bucketlist_name, bucketlist_age } = this.state;
    this.props.postBucketList({ name: bucketlist_name, completed_by: bucketlist_age });
  }
  renderBucketLists() {
    const { bucketlists } = this.props;
    if (bucketlists.length < 1) {
      return (
        <p> No bucketlists created.</p>
      );
    }
    return bucketlists.map(bucketlist => (
      <BucketListDetail
        key={bucketlist.id}
        name={bucketlist.name}
        delete={this.showDeleteBucketList}
        edit={this.showEditBucketList}
      />
      ),
    );
  }

  render() {
    return (
      <div>
        <div className="col-md-4">
          <div className="panel panel-default">
            <Header
              showAddBucketList={this.showAddBucketList}
            />
            <div className="panel-body">
              {this.renderBucketLists()}
            </div>
          </div>
        </div>
        <AddBucketListForm
          show={this.state.showAddBucketList}
          data={this.state}
          showAddBucketList={this.showAddBucketList}
          onNameChange={this.changeBucketListname}
          onAgeChange={this.changeBucketListage}
          addBucketList={this.addBucketList}
        />
        <EditBucketListForm
          show={this.state.showEditBucketList}
          data={this.state}
          showEditBucketList={this.showEditBucketList}
          onNameChange={this.changeBucketListname}
          onAgeChange={this.changeBucketListage}
          addBucketList={this.addBucketList}
        />
        <ConfirmDelete
          show={this.state.showDeleteBucketList}
          name="BucketList"
          cancel={this.showDeleteBucketList}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { bucketlists } = state.bucketlists;
  return { bucketlists };
};

export default connect(mapStateToProps,
  { getBucketLists, postBucketList })(BucketListContainer);
