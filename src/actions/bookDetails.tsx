import camelcaseKeysDeep from 'camelcase-keys-deep';

import {
  BOOK_DETAILS_FAILURE,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
} from './types';
import { Book } from '@services';

const request = () => ({
  type: BOOK_DETAILS_REQUEST,
});

const success = (data: any) => ({
  type: BOOK_DETAILS_SUCCESS,
  payload: {
    data: data.book,
  },
});

const failure = error => ({
  type: BOOK_DETAILS_FAILURE,
  payload: {
    error,
  },
});

export const getBookDetails = (bookId: any, token: string) => async (
  dispatch: any,
) => {
  dispatch(request());

  try {
    const response = await Book.getBookDetails({ bookId, token });
    const data = await response.json();

    dispatch(success(camelcaseKeysDeep(data)));
  } catch (e) {
    dispatch(failure(e));
  }
};
