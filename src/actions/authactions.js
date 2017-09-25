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

export const onShowSignIn = () => ({
  type: 'SHOW_SIGNIN',
});

export const onShowResetPassword = () => ({
  type: 'SHOW_RESETPASSWORD',
});

export const onShowSignUp = () => ({
  type: 'SHOW_SIGNUP',
});

export const onUsernameChange = e => ({
  type: 'USERNAME_CHANGE',
  payload: e.target.value,
});

export const onPasswordChange = e => ({
  type: 'PASSWORD_CHANGE',
  payload: e.target.value,
});

export const onRepeatPasswordChange = e => ({
  type: 'REPEAT_PASSWORD_CHANGE',
  payload: e.target.value,
});

export const changeNewPassword = e => ({
  type: 'NEW_PASSWORD_CHANGE',
  payload: e.target.value,
});

export const changeOldPassword = e => ({
  type: 'OLD_PASSWORD_CHANGE',
  payload: e.target.value,
});
