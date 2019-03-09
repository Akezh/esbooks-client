import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { text } = colors;
const { medium } = fonts;

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
  },
  title: {
    color: text,
    fontFamily: medium,
    fontSize: 20,
    marginBottom: 12,
    marginLeft: 24,
  },
});

export { styles };