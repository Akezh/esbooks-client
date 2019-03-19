import {
  RATE_BOOK_FAILURE,
  RATE_BOOK_REQUEST,
  RATE_BOOK_SUCCESS,
} from '@actions';

const initState = {
  myRating: {},
  error: null,
  isLoading: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case RATE_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RATE_BOOK_SUCCESS:
      return {
        ...state,
        myRating: payload.myRating,
        isLoading: false,
      };
    case RATE_BOOK_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
