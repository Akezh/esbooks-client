import { combineReducers } from 'redux';
import auth from './auth';
import addBook from './addBook';
import bookData from './bookData';
import search from './search';
import underlayerReducer from './underlayerReducer';

const rootReducer = combineReducers({
  auth,
  addBook,
  search,
  bookData,
  underlayer: underlayerReducer,
});

export default rootReducer;