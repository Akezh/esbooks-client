import camelcaseKeysDeep from 'camelcase-keys-deep';

import {
  ADD_MY_BOOK_REQUEST,
  ADD_MY_BOOK_FAILURE,
  ADD_MY_BOOK_SUCCESS,
} from './types';
import { User } from '@services';

const request = () => ({
  type: ADD_MY_BOOK_REQUEST,
});

const success = book => ({
  type: ADD_MY_BOOK_SUCCESS,
  payload: {
    book,
  },
});

const failure = error => ({
  type: ADD_MY_BOOK_FAILURE,
  payload: {
    error,
  },
});

export const addBook = (data: any, token: string) => async (dispatch: any) => {
  dispatch(request());

  try {
    const response = await User.addBook({ book: data, token });
    const book = response.json();

    dispatch(success(camelcaseKeysDeep(book)));
  } catch (e) {
    dispatch(failure(e));
  }
};