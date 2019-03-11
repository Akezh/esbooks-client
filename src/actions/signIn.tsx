import decamelizeKeysDeep from 'decamelize-keys-deep';
import camelcaseKeysDeep  from 'camelcase-keys-deep';

import { User } from '@services';
import { IUserInfo, ISuccessSignInResponse, IErrorSignInResponse } from '@types';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
} from './types';

const request = (provider: string) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    provider,
  },
});

const success = (data: ISuccessSignInResponse, provider: string) => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    user: data.user,
    token: data.token,
    provider,
  },
});

const failure = (error: IErrorSignInResponse) => ({
  type: SIGN_IN_FAILURE,
  payload: {
    error,
  },
});

export const signIn = (userInfo: IUserInfo) => async dispatch => {
  const provider = userInfo.providerData.provider;
  dispatch(request(provider));

  try {
    const response = await User.signIn({ userInfo: decamelizeKeysDeep(userInfo) });
    const data = await response.json();

    dispatch(success(camelcaseKeysDeep(data), provider));
  } catch (e) {
    dispatch(failure(e));
  }
};
