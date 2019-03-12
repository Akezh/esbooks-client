import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { fonts } = THEME;
const { regular } = fonts;

const styles = StyleSheet.create({
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
  btnIcon: {
    height: 24,
    marginRight: 16,
    width: 24,
  },
  btnText: {
    fontFamily: regular,
    fontSize: 16,
  },
});

export { styles };