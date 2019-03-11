import React, { FunctionComponent } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import { SignInButton } from '@components';
import { SOCIAL_MEDIA_ICONS } from '@static';
import { IGoogleSignInError, IGoogleSignInResult } from '@types';
import { styles } from '../SignInView.styles';

interface IProps {
  onLoginFinished: (error: IGoogleSignInError, user: IGoogleSignInResult) => void;
}

const TITLE = 'Login with Google';

const GoogleSignInButton: FunctionComponent<IProps> = (props) => {
  const onGoogleSignIn = async () => {
    const { onLoginFinished } = props;
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      onLoginFinished(null, userInfo);
    } catch (error) {
      onLoginFinished(error, null);
    }
  };

  return (
    <SignInButton source={SOCIAL_MEDIA_ICONS['google-plus']} onPress={onGoogleSignIn} title={TITLE} btnStyles={styles.googleBtn} textStyles={styles.googleBtnText}/>
  );
};

export default GoogleSignInButton;