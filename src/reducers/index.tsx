import { combineReducers } from 'redux';
import auth from './auth';
import addBook from './addBook';
import bookData from './bookData';
import search from './search';
import bookDetails from './bookDetails';
import underlayerReducer from './underlayerReducer';

const rootReducer = combineReducers({
  auth,
  addBook,
  search,
  bookData,
  bookDetails,
  underlayer: underlayerReducer,
});

export default rootReducer;