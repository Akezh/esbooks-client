import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { primary } = colors;
const { medium } = fonts;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 0,
  },
  title: {
    color: 'black',
    fontFamily: medium,
    fontSize: 16,
    marginBottom: 2,
  },
  additionalText: {
    marginBottom: 24,
  },
  writeReviewBtn: {
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
    width: '100%',
  },
  writeReviewBtnText: {
    color: primary,
    fontFamily: medium,
    fontSize: 14,
  },
});

export { styles };