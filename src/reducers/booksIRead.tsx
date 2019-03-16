import {
  BOOKS_I_READ_FAILURE,
  BOOKS_I_READ_REQUEST,
  BOOKS_I_READ_SUCCESS,
} from '@actions';
  
const initState = {
  data: {},
  error: null,
  isLoading: false,
};

  
export default (state = initState, { type, payload }) => {
  switch (type) {
    case BOOKS_I_READ_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case BOOKS_I_READ_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    case BOOKS_I_READ_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};