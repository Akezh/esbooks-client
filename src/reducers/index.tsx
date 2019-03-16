import { combineReducers } from 'redux';
import auth from './auth';
import bookData from './bookData';
import myBooks from './myBooks';
import underlayerReducer from './underlayerReducer';

const rootReducer = combineReducers({
  auth,
  bookData,
  myBooks,
  underlayer: underlayerReducer,
});

export default rootReducer;