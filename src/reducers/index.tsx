import addBook from './addBook';
import auth from './auth';
import bookData from './bookData';
import booksIRead from './booksIRead';
import myBooks from './myBooks';
import search from './search';
import theQueueForTheBook from './theQueueForTheBook';
import underlayerReducer from './underlayerReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  addBook,
  auth,
  bookData,
  booksIRead,
  myBooks,
  search,
  theQueueForTheBook,
  underlayer: underlayerReducer,
});

export default rootReducer;
