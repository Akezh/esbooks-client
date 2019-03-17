import {
  REMOVE_QUEUE_FAILURE,
  REMOVE_QUEUE_REQUEST,
  REMOVE_QUEUE_SUCCESS,
} from '@actions';

const initState = {
  queues: [],
  error: null,
  isLoading: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case REMOVE_QUEUE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REMOVE_QUEUE_SUCCESS:
      return {
        ...state,
        queues: payload.queues,
        isLoading: false,
      };
    case REMOVE_QUEUE_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
