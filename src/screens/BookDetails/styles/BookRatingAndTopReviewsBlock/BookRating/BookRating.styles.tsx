import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { regular } = fonts;
const { inactively } = colors;

const styles = StyleSheet.create({
  ratingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ratingLeftSection: {
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 32,
  },
  rating: {
    color: 'black',
    fontFamily: regular,
    fontSize: 64,
    marginBottom: -8,
    marginTop: -14,
  },
  numberOfVoters: {
    color: inactively,
    fontFamily: regular,
    fontSize: 12,
  },
});

export { styles };