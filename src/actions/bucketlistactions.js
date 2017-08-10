import instance from '../config/axiosconfig';

export const getBucketLists = () => ({
  type: 'GET_BUCKETLISTS',
  payload: instance.get('/bucketlists'),
});

export const postBucketList = ({ name, completed_by }) => ({
  type: 'POST_BUCKETLISTS',
  payload: instance.post('/bucketlists', { name, completed_by }),
});
