import { HIDE_UNDERLAYER, SHOW_UNDERLAYER } from './types';

export const hideUnderlayer = (): { type: string } => {
  return {
    type: HIDE_UNDERLAYER,
  };
};

export const showUnderlayer = (): { type: string } => {
  return {
    type: SHOW_UNDERLAYER,
  };
};

