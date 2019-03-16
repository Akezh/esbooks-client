import camelcaseKeysDeep from 'camelcase-keys-deep';

import {
  MY_BOOKS_FAILURE,
  MY_BOOKS_REQUEST,
  MY_BOOKS_SUCCESS,
} from './types';
import { User } from '@services';

const request = () => ({
  type: MY_BOOKS_REQUEST,
});

const success = (data) => ({
  type: MY_BOOKS_SUCCESS,
  payload: {
    data: data.books,
  },
});

const failure = (error) => ({
  type: MY_BOOKS_FAILURE,
  payload: {
    error,
  },
});

export const getMyBooksData = (token: string) => async (dispatch: any) => {
  dispatch(request());

  try {
    const response = await User.getMyBooks('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzOGIzYzJlLTNkYmItNGYzMC1iODM3LTM3ZWU1MTUzMzNhMyIsImlhdCI6MTU1Mjc1OTQxMX0.T110sY7zBryw3qKTafU-Xtz16I8kcGI9S6hJPlCS6LM');
    const data = await response.json();
    dispatch(success(data));
  } catch (e) {
    dispatch(failure(e));
  }
};
