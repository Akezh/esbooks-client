import {
  ADD_MY_BOOK_REQUEST,
  ADD_MY_BOOK_FAILURE,
  ADD_MY_BOOK_SUCCESS,
} from '@actions';

const initState = {
  error: null,
  book_info: {},
  isLoading: false,
  isLogged: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_MY_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_MY_BOOK_SUCCESS:
      return {
        ...state,
        info: payload.book,
        isLoading: false,
        isLogged: true,
      };
    case ADD_MY_BOOK_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
