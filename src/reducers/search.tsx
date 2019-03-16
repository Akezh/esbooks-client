import { SEARCH_REQUEST, SEARCH_FAILURE, SEARCH_SUCCESS } from '@actions';

const initState = {
  error: null,
  books: {},
  isLoading: false,
  isLogged: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        books: payload.books,
        isLoading: false,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
