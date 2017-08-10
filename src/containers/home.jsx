import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBucketLists, postBucketList } from '../actions';
import Header from '../components/header';
import ResetPassword from '../components/resetpassword';
import BucketLists from '../components/bucketlists';
import AddBucketListForm from '../components/addbucketlist';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResetPassword: false,
      showAddBucketList: false,
      bucketlist_name: '',
      bucketlist_age: '',
    };
    this.showResetPassword = this.showResetPassword.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.showAddBucketList = this.showAddBucketList.bind(this);
    this.addBucketList = this.addBucketList.bind(this);
    this.addBucketListname = this.addBucketListname.bind(this);
    this.addBucketListage = this.addBucketListage.bind(this);
  }
  componentWillMount() {
    this.props.getBucketLists();
  }
  addBucketListname(e) {
    this.setState({ bucketlist_name: e.target.value });
  }
  addBucketListage(e) {
    this.setState({ bucketlist_age: e.target.value });
  }
  addBucketList() {
    const { bucketlist_name, bucketlist_age } = this.state;
    this.props.postBucketList({ name: bucketlist_name, completed_by: bucketlist_age });
  }
  showResetPassword() {
    this.setState({ showResetPassword: !this.state.showResetPassword });
  }
  showAddBucketList() {
    this.setState({ showAddBucketList: !this.state.showAddBucketList });
  }
  handleSelect(eventKey) {
    if (eventKey === 1.2) {
      this.showResetPassword();
    }
  }
  render() {
    console.log(this.state);
    const { bucketlists } = this.props;
    return (
      <div>
        <Header
          handleSelect={this.handleSelect}
        />
        <ResetPassword
          showResetPassword={this.showResetPassword}
          show={this.state.showResetPassword}
        />
        <BucketLists
          showAddBucketList={this.showAddBucketList}
          bucketlists={bucketlists}
        />
        <AddBucketListForm
          onNameChange={this.addBucketListname}
          onAgeChange={this.addBucketListage}
          show={this.state.showAddBucketList}
          showAddBucketList={this.showAddBucketList}
          addBucketList={this.addBucketList}
          data={this.state}
        />
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  const { bucketlists } = state.bucketlists;
  return { bucketlists };
};

export default connect(mapStateToProps, { getBucketLists, postBucketList })(Home);
