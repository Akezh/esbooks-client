import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { primary } = colors;
const { regular } = fonts;

const styles = StyleSheet.create({
  menuBtn: {
    paddingVertical: 6,
    paddingLeft: 12,
  },
  menuIcon: {
    height: 16,
    width: 16,
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