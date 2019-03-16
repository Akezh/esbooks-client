import camelcaseKeysDeep from 'camelcase-keys-deep';

import { MY_BOOKS_FAILURE, MY_BOOKS_REQUEST, MY_BOOKS_SUCCESS } from './types';
import { User } from '@services';

const request = () => ({
  type: MY_BOOKS_REQUEST,
});

const success = data => ({
  type: MY_BOOKS_SUCCESS,
  payload: {
    data: data.books,
  },
});

const failure = error => ({
  type: MY_BOOKS_FAILURE,
  payload: {
    error,
  },
});

export const getMyBooksData = (token: string) => async (dispatch: any) => {
  dispatch(request());

  try {
    const response = await User.getMyBooks(token);
    const data = await response.json();

    dispatch(success(camelcaseKeysDeep(data)));
  } catch (e) {
    dispatch(failure(e));
  }
};
