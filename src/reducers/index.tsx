import { combineReducers } from 'redux';
import bookData from './bookData';
import underlayerReducer from './underlayerReducer';

const rootReducer = combineReducers({
  bookData,
  underlayer: underlayerReducer,
});

export default rootReducer;