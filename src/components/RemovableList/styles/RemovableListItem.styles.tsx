import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { primary } = colors;
const { regular } = fonts;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 30,
    flexDirection: 'row',
    marginRight: 8,
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  text: {
    color: '#FFF',
    fontFamily: regular,
    fontSize: 14,
    marginRight: 2,
  },
});

export { styles };