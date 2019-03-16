import { bindActionCreators } from 'redux';
import { hideUnderlayer, showUnderlayer, search } from '@actions';

export const mapStateToProps = (state) => {
  return {
    isUnderlayerActive: state.underlayer.isUnderlayerActive,
    isLoading: state.search.isLoading,
    books: state.search.books,
    token: state.auth.token,
  };
};

export const mapActionsToProps = (dispatch) => {
  return {
    hideUnderlayer: bindActionCreators(hideUnderlayer, dispatch),
    showUnderlayer: bindActionCreators(showUnderlayer, dispatch),
    search: bindActionCreators(search, dispatch),
  };
};