import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { inactively, primary, text } = colors;
const { medium, regular } = fonts;

const authorIconSize = 40;

const styles = StyleSheet.create({
  containerWrapper: {
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4,
    borderWidth: 0.5,
    margin: 16,
    marginBottom: 0,
    padding: 16,
  },
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  imageWrapper: {
    height: 180,
    marginTop: 4,
    position: 'relative',
    width: 120,
  },
  image: {
    height: 180,
    width: 120,
  },
  numberOfWaitingPeopleBtn: {
    alignItems: 'center',
    backgroundColor: primary,
    borderColor: '#FFF',
    borderRadius: 28,
    borderWidth: 2,
    height: 28,
    justifyContent: 'center',
    left: 8,
    position: 'absolute',
    top: 8,
    width: 28,
  },
  numberOfWaitingPeopleBtnText: {
    color: '#FFF',
    fontFamily: medium,
    fontSize: 14,
  },
  bookInfo: {
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 16,
  },
  bookInfoTitleWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  bookInfoTitle: {
    color: text,
    flex: 1,
    fontFamily: medium,
    fontSize: 18,
    marginBottom: 8,
  },
  bookInfoAuthorInfoBlock: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    marginTop: 2,
  },
  bookInfoAuthorIcon: {
    height: authorIconSize,
    width: authorIconSize,
    marginRight: 12,
  },
  bookInfoAuthorWrapper: {
    flex: 1,
    flexWrap: 'wrap',
  },
  bookInfoAuthor: {
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
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 6,
    marginTop: 12,
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
});

export { styles };