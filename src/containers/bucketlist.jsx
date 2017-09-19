import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/header_bucketlist';
import BucketListDetail from '../components/bucketlistdetail';
import AddBucketListForm from '../components/addbucketlist';
import ConfirmDelete from '../components/confirmBlistDelete';
import EditBucketListForm from '../components/editbucketlist';
import * as bucketActions from '../actions';

class BucketListContainer extends Component {
  componentWillMount() {
    this.props.bucketActions.getBucketLists();
  }

  renderBucketLists() {
    const { bucketlists } = this.props.bucketlistsContainer;
    const { bucketActions } = this.props;
    if (bucketlists.length < 1) {
      return (
        <p> No bucketlists created.</p>
      );
    }
    return bucketlists.map(bucketlist => (
      <BucketListDetail
        key={bucketlist.id}
        {...bucketlist}
        {...bucketActions}
      />
      ),
    );
  }

  render() {
    const { bucketlistsContainer, bucketActions } = this.props;
    return (
      <div>
        <div className="col-md-4">
          <div className="panel panel-default">
            <Header
              title="BucketLists"
              add
              {...bucketActions}
            />
            <div className="panel-body">
              {this.renderBucketLists()}
            </div>
          </div>
        </div>
        <AddBucketListForm
          {...bucketlistsContainer}
          {...bucketActions}
        />
        <EditBucketListForm
          {...bucketlistsContainer}
          {...bucketActions}
        />
        <ConfirmDelete
          {...bucketlistsContainer}
          {...bucketActions}
          name="BucketList"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { bucketlistsContainer } = state;
  return { bucketlistsContainer };
};

const mapDispatchToProps = dispatch => ({
  bucketActions: bindActionCreators(bucketActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BucketListContainer);

export { BucketListContainer };
