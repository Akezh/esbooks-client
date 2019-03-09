import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const {
  error,
  inactively,
  primary,
  text,
} = colors;
const { medium, regular } = fonts;

const authorIconSize = 40;

const styles = StyleSheet.create({
  bookInfoBlockWrapper: {
    margin: 16,
    marginBottom: 24,
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
  title: {
    color: text,
    fontFamily: medium,
    fontSize: 20,
    marginBottom: 8,
  },
  authorInfoBlock: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  authorIconWrapper: {
    alignItems: 'center',
    borderRadius: authorIconSize,
    elevation: 4,
    height: authorIconSize + 1,
    justifyContent: 'center',
    width: authorIconSize + 1,
    marginRight: 12,
  },
  authorIcon: {
    height: authorIconSize,
    width: authorIconSize,
  },
  authorInfoTextWrapper: {
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
  },
  author: {
    color: text,
    fontFamily: regular,
    fontSize: 16,
  },
  bookInfoText: {
    color: inactively,
    fontFamily: regular,
    fontSize: 14,
  },
  ownerInfo: {
    alignItems: 'center',
    borderRadius: 1,
    elevation: 1,
    flexDirection: 'row',
    marginVertical: 12,
    maxWidth: 200,
    padding: 8,
  },
  ownerPhoto: {
    height: authorIconSize,
    marginRight: 12,
    width: authorIconSize,
  },
  ownerInfoTextWrapper: {
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
  },
  ownerName: {
    color: text,
  },
  isBookStatus: {
    fontFamily: regular,
    fontSize: 14,
  },
  isBookFree: {
    color: primary,
  },
  isNotBookFree: {
    color: error,
  },
  waitingList: {
    color: inactively,
    fontFamily: regular,
    fontSize: 12,
  },
  btnWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 16,
    width: '100%',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  askBtn: {
    paddingHorizontal: 36,
  },
  btnText: {
    color: '#FFF',
    fontFamily: medium,
    fontSize: 14,
  },
});

export { styles };