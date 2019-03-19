import camelcaseKeysDeep from 'camelcase-keys-deep';

import {
  RATE_BOOK_REQUEST,
  RATE_BOOK_SUCCESS,
  RATE_BOOK_FAILURE,
} from './types';
import { Book } from '@services';

const request = () => ({
  type: RATE_BOOK_REQUEST,
});

const success = myRating => ({
  type: RATE_BOOK_SUCCESS,
  payload: {
    myRating,
  },
});

const failure = error => ({
  type: RATE_BOOK_FAILURE,
  payload: {
    error,
  },
});

export const rateBook = (
  bookId: string,
  myRating: string,
  token: string,
) => async (dispatch: any) => {
  dispatch(request());

  try {
    const response = await Book.setBookRating({ bookId, myRating, token });
    const book = response.json();
    dispatch(success(camelcaseKeysDeep(book)));
  } catch (e) {
    dispatch(failure(e));
  }
};
