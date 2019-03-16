import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { inactively, text } = colors;
const { regular } = fonts;

export const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 0.5,
    padding: 0.5,
    borderBottomWidth: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  image: {
    height: 100,
    width: 70,
  },
  bookInfo: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
  bookInfoSection: {
    flex: 1,
  },
  titleWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    color: text,
    fontFamily: regular,
    fontSize: 14,
  },
  text: {
    color: inactively,
    fontFamily: regular,
    fontSize: 12,
  },
  ownerInfoSectionWrapper: {
    justifyContent: 'flex-end',
  },
  ownerInfoSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ownerPhoto: {
    height: 36,
    marginRight: 8,
    width: 36,
  },
  ownerTextWrapper: {
    flex: 1,
  },
  owner: {
    color: text,
    fontFamily: regular,
    fontSize: 12,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: inactively,
    fontFamily: regular,
    fontSize: 12,
  },
});
