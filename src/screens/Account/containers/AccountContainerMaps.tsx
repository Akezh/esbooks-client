import { bindActionCreators } from 'redux';
import { setUserInfo, updateUserInfo } from '@actions';

export const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    prevData: state.auth.info,
    provider: state.auth.provider,
    token: state.auth.token,
  };
};

export const mapActionsToProps = dispatch => {
  return {
    setUserInfo: bindActionCreators(setUserInfo, dispatch),
    updateUserInfo: bindActionCreators(updateUserInfo, dispatch),
  };
};
