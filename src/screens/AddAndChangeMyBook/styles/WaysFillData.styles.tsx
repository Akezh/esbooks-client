import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { text, primary } = colors;
const { medium, regular } = fonts;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  section: {
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    color: text,
    fontFamily: medium,
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  text: {
    color: text,
    fontFamily: regular,
    fontSize: 16,
    marginBottom: 8,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    marginBottom: 24,
    width: 140,
  },
  btnText: {
    color: '#FFF',
    fontFamily: regular,
    fontSize: 14,
  },
  textInput: {
    marginBottom: 8,
  },
  manuallyBtn: {
    marginBottom: 6,
    marginTop: 16,
  },
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { styles };