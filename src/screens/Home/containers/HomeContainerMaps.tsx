import { bindActionCreators } from 'redux';
import { hideUnderlayer, showUnderlayer } from '@actions';

export const mapStateToProps = (state) => {
  return {
    isUnderlayerActive: state.underlayer.isUnderlayerActive,
  };
};

export const mapActionsToProps = (dispatch) => {
  return {
    hideUnderlayer: bindActionCreators(hideUnderlayer, dispatch),
    showUnderlayer: bindActionCreators(showUnderlayer, dispatch),
  };
};