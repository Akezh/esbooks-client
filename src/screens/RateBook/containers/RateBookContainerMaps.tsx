import { bindActionCreators } from 'redux';
import { rateBook } from '@actions';

export const mapStateToProps = state => {
  return {
    token: state.auth.token,
  };
};

export const mapActionsToProps = dispatch => {
  return {
    rateBook: bindActionCreators(rateBook, dispatch),
  };
};
