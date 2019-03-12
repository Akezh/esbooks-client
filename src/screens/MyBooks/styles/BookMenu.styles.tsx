import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { primary } = colors;
const { regular } = fonts;

const styles = StyleSheet.create({
  menuBtn: {
    paddingLeft: 12,
  },
  menuItem: {
    backgroundColor: primary,
    borderRadius: 2,
  },
  menuItemText: {
    color: '#FFFFFF',
    fontFamily: regular,
  },
});

export { styles };