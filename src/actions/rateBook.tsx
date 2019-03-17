import camelcaseKeysDeep from 'camelcase-keys-deep';

import {
  RATE_BOOK_REQUEST,
  RATE_BOOK_SUCCESS,
  RATE_BOOK_FAILURE,
} from './types';
import { User } from '@services';

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

export const rateBook = () => async (dispatch: any) => {
  dispatch(request());

  try {
    // const response = await User.addBook({ book: data, token });
    // const book = response.json();
    // dispatch(success(camelcaseKeysDeep(book)));
  } catch (e) {
    dispatch(failure(e));
  }
};
