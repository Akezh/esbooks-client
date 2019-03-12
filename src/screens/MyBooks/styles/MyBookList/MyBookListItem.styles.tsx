import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const {
  inactively,
  text,
} = colors;
const { medium, regular } = fonts;

const authorIconSize = 40;

const styles = StyleSheet.create({
  bookInfoBlockWrapper: {
    marginBottom: 24,
    padding: 16,
  },
  bookInfoBlock: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  bookInfoSection: {
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 16,
  },
  titleWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    color: text,
    flex: 1,
    fontFamily: medium,
    fontSize: 18,
    marginBottom: 8,
  },
  authorInfoBlock: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
  },
  authorIconWrapper: {
    alignItems: 'center',
    borderRadius: authorIconSize,
    elevation: 4,
    height: authorIconSize + 1,
    justifyContent: 'center',
    marginRight: 12,
    width: authorIconSize + 1,
  },
  authorIcon: {
    height: authorIconSize,
    width: authorIconSize,
  },
  authorInfoTextWrapper: {
    flex: 1,
    flexWrap: 'wrap',
  },
  author: {
    color: text,
    fontFamily: regular,
    fontSize: 14,
  },
  bookInfoText: {
    color: inactively,
    fontFamily: regular,
    fontSize: 12,
  },
  readerInfoWrapper: {
    borderRadius: 1,
    elevation: 1,
    flexDirection: 'column',
    marginVertical: 12,
    maxWidth: 400,
    minWidth: 200,
    padding: 8,
  },
  readerInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  readerPhoto: {
    height: authorIconSize,
    marginRight: 12,
    width: authorIconSize,
  },
  readerInfoTextWrapper: {
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
  },
  readerName: {
    color: text,
  },
  readerDate: {
    color: inactively,
    fontFamily: regular,
    fontSize: 12,
    marginRight: 6,
    textAlign: 'right',
  },
  menuBtn: {
    paddingLeft: 12,
    paddingVertical: 6,
  },
  menuIcon: {
    height: 16,
    width: 16,
  },
});

export { styles };