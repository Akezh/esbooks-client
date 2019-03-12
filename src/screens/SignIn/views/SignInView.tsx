import React, { FunctionComponent, Fragment } from 'react';
import { Image, Text, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LOGOS } from '@static';
import { styles } from './SignInView.styles';
import { IFBSignInError, IFBSignInResult, IGoogleSignInError, IGoogleSignInResult } from '@types';
import { GoogleSignInButton, FBSignInButton } from './SignInButtons';

const { logo } = LOGOS;

interface IProps {
  googleSignIn: (error: IGoogleSignInError, user: IGoogleSignInResult) => void;
  fbSignIn: (error: IFBSignInError, result: IFBSignInResult) => void;
}

const SignInView: FunctionComponent<IProps> = (props): JSX.Element => {
  const {
    googleSignIn,
    fbSignIn,
  } = props;

  const renderSignInButtons = () => {
    return (
      <Fragment>
        <GoogleSignInButton onLoginFinished={googleSignIn}/>
        <FBSignInButton onLoginFinished={fbSignIn} />
      </Fragment>
    );
  };
  
  return (
    <LinearGradient
      colors={['#444D72', '#0C1028']}
      style={styles.linearGradient}
    >
      <Text style={styles.logoText}>ESB</Text>
      <Text style={styles.textUnderLogoText}>
        Share books with your colleagues
      </Text>
      <Image
        source={logo}
        style={styles.logo}
      />


      { renderSignInButtons() }

      <StatusBar
        backgroundColor='#444D72'
        barStyle='light-content'
      />
    </LinearGradient>
  );
};

export default SignInView;