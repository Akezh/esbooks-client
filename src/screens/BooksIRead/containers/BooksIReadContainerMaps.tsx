import { bindActionCreators } from 'redux';
import { cleanError, getBooksIReadData } from '@actions';

export const mapStateToProps = (state) => {
  return {
    data: state.booksIRead.data,
    error: state.booksIRead.error,
    isLoading: state.booksIRead.isLoading,
    token: state.auth.token,
  };
};

export const mapActionsToProps = (dispatch) => {
  return {
    cleanError: bindActionCreators(cleanError, dispatch),
    getBooksIReadData: bindActionCreators(getBooksIReadData, dispatch),
  };
};