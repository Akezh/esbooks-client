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

const success = (data) => ({
  type: BOOKS_I_READ_SUCCESS,
  payload: {
    data: data.books,
  },
});

const failure = (error) => ({
  type: BOOKS_I_READ_FAILURE,
  payload: {
    error,
  },
});

export const getBooksIReadData = (token: string) => async (dispatch: any) => {
  dispatch(request());

  try {
    const response = await User.getBooksIRead('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzOGIzYzJlLTNkYmItNGYzMC1iODM3LTM3ZWU1MTUzMzNhMyIsImlhdCI6MTU1Mjc1OTQxMX0.T110sY7zBryw3qKTafU-Xtz16I8kcGI9S6hJPlCS6LM');
    const data = await response.json();

    dispatch(success(camelcaseKeysDeep(data)));
  } catch (e) {
    dispatch(failure(e));
  }
};
