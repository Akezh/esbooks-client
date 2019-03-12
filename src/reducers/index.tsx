import { combineReducers } from 'redux';
import auth from './auth';
import bookData from './bookData';
import underlayerReducer from './underlayerReducer';

const rootReducer = combineReducers({
  auth,
  bookData,
  underlayer: underlayerReducer,
});

export default rootReducer;