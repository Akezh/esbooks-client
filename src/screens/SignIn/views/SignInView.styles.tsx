import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { text } = colors;
const { logo, regular } = fonts;

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  logoText: {
    color: '#FFF',
    fontFamily: logo,
    fontSize: 120,
    marginTop: 20,
  },
  textUnderLogoText: {
    color: '#FFF',
    fontFamily: regular,
    fontSize: 16,
  },
  logo: {
    height: 240,
    marginBottom: 40,
    marginTop: 20,
    width: 240,
  },
  btnWrapper: {
    alignItems: 'center',
    borderRadius: 48,
    height: 48,
    justifyContent: 'center',
    marginBottom: 16,
    width: 240,
  },
  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleBtn: {
    backgroundColor: '#FFF',
  },
  facebookBtn: {
    backgroundColor: '#475993',
  },
  btnText: {
    fontFamily: regular,
    fontSize: 16,
  },
  googleBtnText: {
    color: text,
  },
  facebookBtnText: {
    color: '#FFF',
  },
  btnIcon: {
    height: 24,
    marginRight: 16,
    width: 24,
  },
});

export { styles };