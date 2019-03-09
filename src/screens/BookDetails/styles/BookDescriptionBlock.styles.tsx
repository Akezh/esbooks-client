import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { text } = colors;
const { light } = fonts;

const styles = StyleSheet.create({
  block: {
    marginBottom: 8,
  },
  container: {
    margin: 24,
    marginBottom: 12,
  },
  subtitle: {
    color: text,
    fontFamily: light,
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    color: text,
    fontFamily: light,
    fontSize: 15,
  },
});

export { styles };