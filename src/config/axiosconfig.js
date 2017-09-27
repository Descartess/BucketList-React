import axios from 'axios';
import store from './store';

const instance = axios.create({
  baseURL: 'https://descartes-bucketlist.herokuapp.com',
});

instance.defaults.timeout = 5000;
instance.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.authorization = `Bearer ${token}`; // eslint-disable-line no-param-reassign
  }
  config.headers['Access-Control-Allow-Origin'] = '*'; // eslint-disable-line no-param-reassign
  return config;
});

export default instance;

