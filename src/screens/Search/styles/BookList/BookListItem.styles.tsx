import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { inactively, text } = colors;
const { regular } = fonts;

export const styles = StyleSheet.create({
  wrapper: {
    borderBottomEndRadius: 3,
    borderBottomStartRadius: 3,
    elevation: 1,
    margin: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: 120,
    width: 95,
  },
  bookInfoSection: {
    flex: 1,
    padding: 8,
    paddingHorizontal: 12,
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
    padding: 8,
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
});
