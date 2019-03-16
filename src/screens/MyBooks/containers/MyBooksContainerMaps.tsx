import { bindActionCreators } from 'redux';
import { cleanError, getMyBooksData } from '@actions';

export const mapStateToProps = (state) => {
  return {
    data: state.myBooks.data,
    error: state.myBooks.error,
    isLoading: state.myBooks.isLoading,
    token: state.auth.token,
  };
};

export const mapActionsToProps = (dispatch) => {
  return {
    cleanError: bindActionCreators(cleanError, dispatch),
    getMyBooksData: bindActionCreators(getMyBooksData, dispatch),
  };
};