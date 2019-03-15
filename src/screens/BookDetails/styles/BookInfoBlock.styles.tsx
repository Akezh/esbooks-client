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

const authorIconSize = 36;

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
  image: {
    height: 148,
    width: 104,
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
    backgroundColor: 'rgba(0, 0, 0, 0.07)',
    borderColor: 'rgba(0, 0, 0, 0.07)',
    borderRadius: authorIconSize + 3,
    height: authorIconSize + 3,
    justifyContent: 'center',
    marginRight: 12,
    width: authorIconSize + 3,
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
    fontSize: 14,
  },
  bookInfoText: {
    color: inactively,
    fontFamily: regular,
    fontSize: 12,
  },
  ownerInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 12,
  },
  ownerPhoto: {
    height: authorIconSize,
    width: authorIconSize,
  },
  ownerInfoTextWrapper: {
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
  },
  ownerName: {
    color: text,
    fontSize: 14,
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
  btnText: {
    color: '#FFF',
    fontFamily: medium,
    fontSize: 14,
  },
});

export { styles };