import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation';
import { THEME } from '@constants';

const { colors } = THEME;
const { primary } = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: primary,
    height: Header.HEIGHT + 8,
    justifyContent: 'center',
    width: '100%',
    zIndex: 2,
  },
});

export { styles };