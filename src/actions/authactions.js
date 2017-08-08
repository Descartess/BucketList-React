import instance from '../config/axiosconfig';

export const registerUser = ({ username, password }) => ({
  type: 'REGISTER',
  payload: instance.post('auth/register', { username, password }),
});

export const signinUser = ({ username, password }) => ({
  type: 'SIGNIN',
  payload: instance.post('auth/login', { username, password }),
});
