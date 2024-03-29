import { Platform, StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { inactively, primary } = colors;
const { regular } = fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    position: 'relative',
    width: '100%',
  },
  menuWrapper: {
    left: 8,
    margin: 0,
    padding: 12,
    paddingLeft: 18,
    paddingRight: 24,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 14 : 9,
    zIndex: 3,
  },
  menu: {
    height: 22,
    width: 22,
  },
  placeholderWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    left: 72,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 27 : 19,
    zIndex: 3,
  },
  placeholder: {
    color: inactively,
    fontFamily: regular,
    fontSize: 18,
    zIndex: 3,
  },
  placeholderSpecPart: {
    color: primary,
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 2,
    borderWidth: 0.2,
    color: inactively,
    flex: 1,
    fontSize: 16,
    paddingLeft: 64,
    zIndex: 2,
  },
});

export { styles };