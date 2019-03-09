import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { inactively } = colors;
const { regular } = fonts;

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 16,
    borderWidth: 1,
    marginRight: 8,
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    color: inactively,
    fontFamily: regular,
    fontSize: 12,
  },
});

export { styles };