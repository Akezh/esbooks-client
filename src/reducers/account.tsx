import { ACCOUNT_FAILURE, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from '@actions';

const initState = {
  data: {},
  error: null,
  isLoading: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ACCOUNT_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    case ACCOUNT_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
