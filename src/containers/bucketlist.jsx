import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from '../components/header';
import BucketListDetail from '../components/bucketlistdetail';
import AddBucketListForm from '../components/addbucketlist';
import ConfirmDelete from '../components/confirm_delete';
import EditBucketListForm from '../components/editbucketlist';
import { getBucketLists,
  postBucketList,
  selectBucketList,
  deleteBucketList,
  putBucketList,
 } from '../actions';

const initialState = {
  showAddBucketList: false,
  showEditBucketList: false,
  showDeleteBucketList: false,
  bucketlist_name: '',
  bucketlist_age: '',
};

class BucketListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.showAddBucketList = this.showAddBucketList.bind(this);
    this.changeBucketListname = this.changeBucketListname.bind(this);
    this.changeBucketListage = this.changeBucketListage.bind(this);
    this.showDeleteBucketList = this.showDeleteBucketList.bind(this);
    this.showEditBucketList = this.showEditBucketList.bind(this);
    this.addBucketList = this.addBucketList.bind(this);
    this.editBucketList = this.editBucketList.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentWillMount() {
    this.props.getBucketLists();
  }
  reset() {
    this.setState(initialState);
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
  showEditBucketList(id) {
    const { bucketlists } = this.props;
    const bucket = _.find(bucketlists, n => n.id === id);
    this.setState({
      bucketlist_name: bucket.name,
      bucketlist_age: bucket.completed_by,
      showEditBucketList: !this.state.showEditBucketList,
    });
  }
  showDeleteBucketList() {
    this.setState({ showDeleteBucketList: !this.state.showDeleteBucketList });
  }
  editBucketList() {
    const { selected_bucket } = this.props;
    const { bucketlist_name, bucketlist_age } = this.state;
    this.props.putBucketList(selected_bucket,
      { name: bucketlist_name, completed_by: bucketlist_age });
  }
  addBucketList() {
    const { bucketlist_name, bucketlist_age } = this.state;
    this.props.postBucketList({ name: bucketlist_name, completed_by: bucketlist_age });
    this.reset();
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
        edit={() => this.showEditBucketList(bucketlist.id)}
        select={() => this.props.selectBucketList(bucketlist.id)}
      />
      ),
    );
  }

  render() {
    const { selected_bucket } = this.props;
    return (
      <div>
        <div className="col-md-4">
          <div className="panel panel-default">
            <Header
              title="BucketLists"
              add={this.showAddBucketList}
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
          showEditBucketList={() => this.showEditBucketList(selected_bucket)}
          onNameChange={this.changeBucketListname}
          onAgeChange={this.changeBucketListage}
          editBucketList={this.editBucketList}
        />
        <ConfirmDelete
          show={this.state.showDeleteBucketList}
          name="BucketList"
          cancel={this.showDeleteBucketList}
          delete={() => this.props.deleteBucketList(selected_bucket)}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { bucketlists, selected_bucket } = state.bucketlists;
  return { bucketlists, selected_bucket };
};

export default connect(mapStateToProps, {
  getBucketLists,
  postBucketList,
  selectBucketList,
  deleteBucketList,
  putBucketList })(BucketListContainer);
