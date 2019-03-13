import { bindActionCreators } from 'redux';
import { cleanError, getBookData } from '@actions';

export const mapStateToProps = (state) => {
  return {
    data: state.bookData.data,
    error: state.bookData.error,
    isLoading: state.bookData.isLoading,
  };
};

export const mapActionsToProps = (dispatch) => {
  return {
    cleanError: bindActionCreators(cleanError, dispatch),
    getBookData: bindActionCreators(getBookData, dispatch),
  };
};