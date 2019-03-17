import camelcaseKeysDeep from 'camelcase-keys-deep';
import {
  REMOVE_QUEUE_FAILURE,
  REMOVE_QUEUE_REQUEST,
  REMOVE_QUEUE_SUCCESS,
} from './types';
import { User } from '@services';

const request = () => ({
  type: REMOVE_QUEUE_REQUEST,
});

const success = data => ({
  type: REMOVE_QUEUE_SUCCESS,
  payload: {
    queues: data.queues,
  },
});

const failure = error => ({
  type: REMOVE_QUEUE_FAILURE,
  payload: {
    error,
  },
});

export const removeQueue = (
  userId: string,
  bookId: string,
  token: string,
) => async (dispatch: any) => {
  dispatch(request());

  try {
    const response = await User.removeUserFromQueue(userId, bookId, token);
    const data = await response.json();
    dispatch(success(camelcaseKeysDeep(data)));
  } catch (e) {
    dispatch(failure(e));
  }
};
