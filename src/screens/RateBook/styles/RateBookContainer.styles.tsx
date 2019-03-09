import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { placeholder, primary } = colors;
const { medium } = fonts;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 8,
    flexDirection: 'row',
    height: Header.HEIGHT + 20,
    width: '100%',
  },
  close: {
    marginLeft: 12,
    marginRight: 18,
  },
  image: {
    height: 60,
    width: 40,
  },
  headerTextWrapper: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 18,
    marginRight: 24,
  },
  title: {
    color: 'black',
    fontFamily: medium,
    fontSize: 16,
  },
  postBtn: {
    marginRight: 12,
    padding: 12,
  },
  postBtnText: {
    fontFamily: medium,
    fontSize: 14,
  },
  activePostBtnText: {
    color: primary,
  },
  inactivePostBtnText: {
    color: placeholder,
  },
});

export { styles };