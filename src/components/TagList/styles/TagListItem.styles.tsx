import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { primary } = colors;
const { regular } = fonts;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 4,
    justifyContent: 'center',
    marginRight: 8,
    marginVertical: 16,
    maxHeight: 30,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    color: '#FFF',
    fontFamily: regular,
    fontSize: 12,
  },
});

export { styles };