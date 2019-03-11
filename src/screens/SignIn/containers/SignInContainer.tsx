import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleSignin, statusCodes  } from 'react-native-google-signin';
import { GOOGLE_WEB_CLIENT_ID, PROVIDER } from '@constants';
import { IGoogleSignInError, IGoogleSignInResult, IUserInfo } from '@types';
import { mapStateToProps, mapActionsToProps } from './SignInContainerMaps';
import SignInView from '../views';

interface IProps {
  onMain: () => void;
  signIn: (token: any) => void;
  isLogged: boolean;
}

class SignInContainer extends Component<IProps>  {
  componentDidMount() {
    GoogleSignin.configure();
  }

  _configureGoogleSignIn() {
    this.configureGoogleSignIn();
  }

  configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID,
      offlineAccess: false,
    });
  }

  render() {
    return <SignInView
      googleSignIn={this.googleSignIn}
    />;
  }
  private googleSignIn = async (error: IGoogleSignInError, result: IGoogleSignInResult) => {
    const provider = PROVIDER.Google;
    if (error) {
      // TODO: process error
      const code = error.code;

      const errorMessage = this.getGoogleErrorMessage(code);
      alert(errorMessage);
    } else {
      if (result) {
        const { id, name, email, photo } = result.user;

        const userInfo = {
          email,
          fullName: name,
          avatar: photo,
          providerData: {
            provider,
            uid: id,
          },
        };

        await this.signIn(userInfo);
      }
    }
  }

  private getGoogleErrorMessage = (code: string) => {
    const { SIGN_IN_CANCELLED, IN_PROGRESS, PLAY_SERVICES_NOT_AVAILABLE} = statusCodes;
    
    switch(code) {
      case SIGN_IN_CANCELLED: return 'User cancelled the login flow';
      case IN_PROGRESS: return 'Operation (f.e. sign in) is in progress already';
      case PLAY_SERVICES_NOT_AVAILABLE: return 'Play services not available or outdated';
      default: return 'Some other error happened - ' + code;
    }
  }

  private signIn = async (userInfo: IUserInfo) => {
    const { signIn, onMain } = this.props;
    await signIn(userInfo);
    
    if (this.props.isLogged) {
      onMain();
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(SignInContainer);