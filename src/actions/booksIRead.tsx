import camelcaseKeysDeep from 'camelcase-keys-deep';

import {
  BOOKS_I_READ_FAILURE,
  BOOKS_I_READ_REQUEST,
  BOOKS_I_READ_SUCCESS,
} from './types';
import { User } from '@services';

const request = () => ({
  type: BOOKS_I_READ_REQUEST,
});

const success = data => ({
  type: BOOKS_I_READ_SUCCESS,
  payload: {
    data: data.books,
  },
});

const failure = error => ({
  type: BOOKS_I_READ_FAILURE,
  payload: {
    error,
  },
});

export const getBooksIReadData = (token: string) => async (dispatch: any) => {
  dispatch(request());

  try {
    const response = await User.getBooksIRead(token);
    const data = await response.json();

    dispatch(success(camelcaseKeysDeep(data)));
  } catch (e) {
    dispatch(failure(e));
  }
};
