import React, { FunctionComponent } from 'react';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import { SignInButton } from '@components';
import { SOCIAL_MEDIA_ICONS } from '@static';
import {
  IFBSignInError,
  IFBGraphRequestCallback,
  IPermissions,
  IFBSignInResult,
} from '@types';
import { styles } from '../SignInView.styles';

interface IProps {
  onLoginFinished: (error: IFBSignInError, result: IFBSignInResult) => void;
}

const TITLE = 'Login with Facebook';

const FBSignInButton: FunctionComponent<IProps> = (props) => {
  const onFacebookSignIn = async () => {
    const permissions: IPermissions = ['public_profile', 'email'];
    const result = await requestPermissions(permissions);

    if (!result.isCancelled) {
      try {
        const accessData: AccessToken | null = await AccessToken.getCurrentAccessToken();
        if (accessData) {
          const accessToken: string = accessData.accessToken;

          const { onLoginFinished } = props;
          userInfoRequest(accessToken, onLoginFinished);
        }
      } catch (e) {
        // TODO: process error
      }
    }
  };

  const requestPermissions = async (permissions: IPermissions) => {
    let result;
    try {
      result = await requestPermissionsIsFacebookInstall(permissions);
    } catch (e) {
      result = await requestPermissionsIsNotFacebookInstall(permissions);
    }
    return result;
  };

  const requestPermissionsIsFacebookInstall = async (permissions: IPermissions) => {
    LoginManager.setLoginBehavior('native_only');
    const result = await LoginManager.logInWithReadPermissions(permissions);
    return result;
  };

  const requestPermissionsIsNotFacebookInstall = async (permissions: IPermissions) => {
    LoginManager.setLoginBehavior('web_only');
    const result = await LoginManager.logInWithReadPermissions(permissions);
    return result;
  };

  const userInfoRequest = (accessToken: string, callback: IFBGraphRequestCallback) => {
    const fields = 'id,name,email,picture';
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken,
        parameters: {
          fields: {
            string: fields,
          },
        },
      },
      // @ts-ignore: Type conflict
      callback,
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  };

  return (
    <SignInButton source={SOCIAL_MEDIA_ICONS.facebook} onPress={onFacebookSignIn} title={TITLE} btnStyles={styles.facebookBtn} textStyles={styles.facebookBtnText}/>
  );
};

export default FBSignInButton;