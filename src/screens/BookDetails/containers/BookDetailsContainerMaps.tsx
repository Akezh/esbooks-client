import { bindActionCreators } from 'redux';
import { getBookDetails } from '@actions';

export const mapStateToProps = state => {
  return {
    token: state.auth.token,
    isLoading: state.bookDetails.isLoading,
    data: state.bookDetails.data,
  };
};

export const mapActionsToProps = dispatch => {
  return {
    getBookDetails: bindActionCreators(getBookDetails, dispatch),
  };
};
