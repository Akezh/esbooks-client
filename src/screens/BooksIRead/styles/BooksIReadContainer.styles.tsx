import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { primary } = colors;
const { medium } = fonts;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: primary,
    elevation: 8,
    flexDirection: 'row',
    height: Header.HEIGHT,
    width: '100%',
  },
  headerLeftPart: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    padding: 12,
    width: 50,
  },
  title: {
    color: '#FFF',
    fontFamily: medium,
    fontSize: 18,
  },
});

export { styles };