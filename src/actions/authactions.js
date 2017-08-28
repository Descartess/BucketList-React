import instance from '../config/axiosconfig';

export const registerUser = ({ username, password }) => ({
  type: 'REGISTER',
  payload: instance.post('/auth/register', { username, password }),
});

export const signinUser = ({ username, password }) => ({
  type: 'SIGNIN',
  payload: instance.post('/auth/login', { username, password }),
});

export const resetpassword = ({ username, old_password, new_password }) => ({
  type: 'RESETPASSWORD',
  payload: instance.post('/auth/reset-password', { username, old_password, new_password }),
});

export const signout = () => ({
  type: 'SIGNOUT',
  payload: instance.get('/auth/logout'),
});
