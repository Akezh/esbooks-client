import { SIGN_OUT } from './types';

export const signOut = () => dispatch => {
  dispatch({ type: SIGN_OUT });
};