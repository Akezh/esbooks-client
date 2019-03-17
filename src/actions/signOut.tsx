import { removeItem } from '@utils';
import { SIGN_OUT } from './types';

export const signOut = () => async dispatch => {
  await removeItem('avatar');
  await removeItem('email');
  await removeItem('fullName');
  await removeItem('provider');
  await removeItem('token');

  dispatch({ type: SIGN_OUT });
};
