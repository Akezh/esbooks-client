import {
  BOOK_DETAILS_FAILURE,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
} from '@actions';

const initState = {
  data: {},
  error: null,
  isLoading: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case BOOK_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case BOOK_DETAILS_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    case BOOK_DETAILS_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};