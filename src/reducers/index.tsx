import { combineReducers } from 'redux';
import auth from './auth';
import addBook from './addBook';
import bookData from './bookData';
import myBooks from './myBooks';
import underlayerReducer from './underlayerReducer';

const rootReducer = combineReducers({
  auth,
  addBook,
  bookData,
  myBooks,
  underlayer: underlayerReducer,
});

export default rootReducer;