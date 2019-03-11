import React, { FunctionComponent } from 'react';
import { Image, Text, View, StatusBar } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { LOGOS, SOCIAL_MEDIA_ICONS } from '@static';
import { styles } from './SignInView.styles';
import { IGoogleSignInError, IGoogleSignInResult } from '@types';
import { GoogleSignInButton } from './SignInButtons';

const { logo } = LOGOS;
const { facebook } = SOCIAL_MEDIA_ICONS;

interface IProps {
  googleSignIn: (error: IGoogleSignInError, user: IGoogleSignInResult) => void;
}

const SignInView: FunctionComponent<IProps> = (props): JSX.Element => {
  const {
    googleSignIn,
  } = props;

  const renderSignInButtons = () => {
    return (
      <View style={styles.wrapperSocialMediaIcons} >
        <GoogleSignInButton onLoginFinished={googleSignIn}/>

        <TouchableRipple
          rippleColor='rgba(0, 0, 0, .14)'
          style={[styles.btnWrapper, styles.facebookBtn]}
        >
          <View style={styles.btn}>
            <Image
              source={facebook}
              style={styles.btnIcon}
            />
            <Text style={[styles.btnText, styles.facebookBtnText]}>
              Login with Google
            </Text>
          </View>
        </TouchableRipple>
      </View>
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