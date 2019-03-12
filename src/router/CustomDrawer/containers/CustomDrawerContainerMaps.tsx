import { bindActionCreators } from 'redux';
import { signOut } from '@actions';

export const mapStateToProps = (state) => {
  return {
    provider: state.auth.provider,
  };
};

export const mapActionsToProps = (dispatch: any) => {
  return {
    signOut: bindActionCreators(signOut, dispatch),
  };
};