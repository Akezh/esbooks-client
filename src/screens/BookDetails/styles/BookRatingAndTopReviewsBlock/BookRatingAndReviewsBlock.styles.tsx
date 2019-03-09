import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { primary } = colors;
const { medium } = fonts;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    color: 'black',
    fontFamily: medium,
    fontSize: 16,
    marginBottom: 16,
  },
  seeAllReviewsBtn: {
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
    width: '100%',
  },
  seeAllReviewsBtnText: {
    color: primary,
    fontFamily: medium,
    fontSize: 14,
  },
});

export { styles };