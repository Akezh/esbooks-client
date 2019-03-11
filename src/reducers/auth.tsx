import {
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
} from '@actions';

const initState = {
  error: null,
  info: {},
  isLoading: false,
  isLogged: false,
  provider: '',
  token: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        info: payload.user,
        isLoading: false,
        isLogged: true,
        token: payload.token,
        provider: payload.provider,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
        provider: '',
      };
    default:
      return state;
  }
};