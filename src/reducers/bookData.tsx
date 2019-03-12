import {
  BOOK_DATA_FAILURE,
  BOOK_DATA_REQUEST,
  BOOK_DATA_SUCCESS,
} from '@actions';

const initState = {
  data: {},
  error: null,
  isLoading: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case BOOK_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case BOOK_DATA_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    case BOOK_DATA_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};