import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { inactively, text } = colors;
const { regular } = fonts;

const authorIconSize = 60;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
  index: {
    color: text,
    fontFamily: regular,
    fontSize: 14,
    marginRight: 16,
  },
  section: {
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4,
    borderWidth: 0.5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  infoWaitingPersonWrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  infoWaitingPerson: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  readerPhoto: {
    height: authorIconSize,
    marginRight: 12,
    width: authorIconSize,
  },
  fullname: {
    color: text,
    fontFamily: regular,
    fontSize: 14,
  },
  date: {
    color: inactively,
    fontFamily: regular,
    fontSize: 12,
  },
  btnsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  closeBtn: {
    marginHorizontal: 16,
  },
  closeBtnMargin: {
    marginRight: 4,
  },
});

export { styles };