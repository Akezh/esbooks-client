import { bindActionCreators } from 'redux';
import { cleanError, getBookData, addBook } from '@actions';

export const mapStateToProps = state => {
  return {
    token: state.auth.token,

    data: state.bookData.data,
    error: state.bookData.error,
    isLoading: state.bookData.isLoading,

    addBookError: state.addBook.error,
    isAddBookLoading: state.addBook.isLoading,
  };
};

export const mapActionsToProps = dispatch => {
  return {
    cleanError: bindActionCreators(cleanError, dispatch),
    getBookData: bindActionCreators(getBookData, dispatch),
    addBook: bindActionCreators(addBook, dispatch),
  };
};