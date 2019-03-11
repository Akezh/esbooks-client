import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { inactively, text } = colors;
const { regular } = fonts;

const size = 94;

export const styles = StyleSheet.create({
  wrapper: {
    borderBottomEndRadius: 3,
    borderBottomStartRadius: 3,
    elevation: 1,
    margin: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: 180,
    width: 120,
  },
  bookInfoSection: {
    flex: 1,
    padding: 8,
    paddingHorizontal: 12,
  },
  titleWrapper: {
    flexWrap: 'wrap',
    width: size,
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
    borderTopColor: 'rgba(0,0,0,0.05)',
    borderTopWidth: 1,
    justifyContent: 'flex-end',
    paddingVertical: 8,
  },
  ownerInfoSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ownerPhoto: {
    height: 36,
    marginRight: 8,
    width: 36,
  },
  ownerTextWrapper: {
    flexWrap: 'wrap',
    width: 60,
  },
  owner: {
    color: text,
    fontFamily: regular,
    fontSize: 12,
  },
});
