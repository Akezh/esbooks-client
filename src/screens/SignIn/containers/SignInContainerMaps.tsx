import { bindActionCreators } from 'redux';
import { signIn } from '@actions';

export const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
    isLoading: state.auth.isLoading,
  };
};

export const mapActionsToProps = (dispatch: any) => {
  return {
    signIn: bindActionCreators(signIn, dispatch),
  };
};