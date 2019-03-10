import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { fonts } = THEME;
const { medium } = fonts;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    color: 'black',
    fontFamily: medium,
    fontSize: 16,
    marginBottom: 16,
  },
});

export { styles };