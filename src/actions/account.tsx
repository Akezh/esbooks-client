import { ACCOUNT_FAILURE, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from './types';

const request = () => ({
  type: ACCOUNT_REQUEST,
});

const success = data => ({
  type: ACCOUNT_SUCCESS,
  payload: {
    data,
  },
});

const failure = error => ({
  type: ACCOUNT_FAILURE,
  payload: {
    error,
  },
});

export const setAccountData = data => async (dispatch: any) => {
  dispatch(request());

  try {
  } catch (e) {
    dispatch(failure(e));
  }
};
