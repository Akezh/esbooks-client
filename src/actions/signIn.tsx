import decamelizeKeysDeep from 'decamelize-keys-deep';
import camelcaseKeysDeep from 'camelcase-keys-deep';
import { saveItem } from '@utils';

import { User } from '@services';
import {
  IUserInfo,
  ISuccessSignInResponse,
  IErrorSignInResponse,
} from '@types';
import { SIGN_IN_REQUEST, SIGN_IN_FAILURE, SIGN_IN_SUCCESS } from './types';

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

export const updateUserInfo = (
  data: any,
  token: string,
  provider: string,
) => async dispatch => {
  dispatch(request(provider));

  try {
    const response: any = await User.update({ data, token });
    const updatedUser = await response.json();
    updatedUser.user.provider = provider;

    await setUserInfo(camelcaseKeysDeep(updatedUser));

    await saveItem('avatar', updatedUser.user.avatar);
    await saveItem('email', updatedUser.user.email);
    await saveItem('fullName', updatedUser.user.full_name);
    await saveItem('provider', provider);
    await saveItem('token', updatedUser.token);

    dispatch(success(camelcaseKeysDeep(updatedUser), provider));
  } catch (e) {
    dispatch(failure(e));
  }
};

export const setUserInfo = (userInfo: any) => async dispatch => {
  const provider = userInfo.provider;
  dispatch(request(provider));

  const newUserInfo: any = {
    success: true,
    token: userInfo.token,
    user: {
      avatar: userInfo.avatar,
      email: userInfo.email,
      fullName: userInfo.fullName,
    },
  };

  try {
    dispatch(success(newUserInfo, provider));
  } catch (e) {
    dispatch(failure(e));
  }
};

export const signIn = (userInfo: IUserInfo) => async dispatch => {
  const provider = userInfo.providerData.provider;
  dispatch(request(provider));

  try {
    const response = await User.signIn({
      userInfo: decamelizeKeysDeep(userInfo),
    });
    const data = await response.json();

    await saveItem('avatar', data.user.avatar);
    await saveItem('email', data.user.email);
    await saveItem('fullName', data.user.full_name);
    await saveItem('provider', provider);
    await saveItem('token', data.token);

    dispatch(success(camelcaseKeysDeep(data), provider));
  } catch (e) {
    dispatch(failure(e));
  }
};
