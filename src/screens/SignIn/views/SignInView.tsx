import React, { FunctionComponent } from 'react';
import { Image, Text, View, StatusBar } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { LOGOS, SOCIAL_MEDIA_ICONS } from '@static';
import { styles } from './SignInView.styles';

const { logo } = LOGOS;
const { facebook, google } = SOCIAL_MEDIA_ICONS;

const SignInView: FunctionComponent = (): JSX.Element => {
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

      <TouchableRipple
        rippleColor='rgba(0, 0, 0, .14)'
        style={[styles.btnWrapper, styles.googleBtn]}
      >
        <View style={styles.btn}>
          <Image
            source={google}
            style={styles.btnIcon}
          />
          <Text style={[styles.btnText, styles.googleBtnText]}>
            Login with Google
          </Text>
        </View>
      </TouchableRipple>

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

      <StatusBar
        backgroundColor='#444D72'
        barStyle='light-content'
      />
    </LinearGradient>
  );
};

export default SignInView;