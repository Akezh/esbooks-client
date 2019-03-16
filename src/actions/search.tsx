import camelcaseKeysDeep from 'camelcase-keys-deep';

import { SEARCH_REQUEST, SEARCH_FAILURE, SEARCH_SUCCESS } from './types';
import { Search } from '@services';

const request = () => ({
  type: SEARCH_REQUEST,
});

const success = (data: any) => ({
  type: SEARCH_SUCCESS,
  payload: {
    books: data.books,
  },
});

const failure = error => ({
  type: SEARCH_FAILURE,
  payload: {
    error,
  },
});

export const search = (query: any, token: string) => async (dispatch: any) => {
  dispatch(request());

  try {
    const response = await Search.search({ query, token });
    const books = await response.json();

    dispatch(success(camelcaseKeysDeep(books)));
  } catch (e) {
    dispatch(failure(e));
  }
};
