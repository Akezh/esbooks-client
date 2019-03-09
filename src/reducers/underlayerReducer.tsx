import { HIDE_UNDERLAYER, SHOW_UNDERLAYER } from '@actions';

const initState = {
  isUnderlayerActive: false,
};

const underlayerReducer = (state = initState, action: any) => {
  switch (action.type) {
    case HIDE_UNDERLAYER:
      return { isUnderlayerActive: false };
    case SHOW_UNDERLAYER:
      return { isUnderlayerActive: true };
    default:
      return state;
  }
};

export default underlayerReducer;