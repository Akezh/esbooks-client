import { bindActionCreators } from 'redux';
import { signIn, setUserInfo } from '@actions';

export const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    isLogged: state.auth.isLogged,
  };
};

export const mapActionsToProps = (dispatch: any) => {
  return {
    setUserInfo: bindActionCreators(setUserInfo, dispatch),
    signIn: bindActionCreators(signIn, dispatch),
  };
};
