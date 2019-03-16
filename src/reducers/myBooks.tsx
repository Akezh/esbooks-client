import {
  MY_BOOKS_FAILURE,
  MY_BOOKS_REQUEST,
  MY_BOOKS_SUCCESS,
} from '@actions';

const initState = {
  data: {},
  error: null,
  isLoading: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case MY_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MY_BOOKS_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    case MY_BOOKS_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};