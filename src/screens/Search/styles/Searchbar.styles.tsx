import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors } = THEME;
const { inactively } = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    position: 'relative',
    width: '100%',
  },
  menuWrapper: {
    left: 8,
    margin: 0,
    padding: 12,
    paddingLeft: 18,
    paddingRight: 24,
    position: 'absolute',
    top: 9,
    zIndex: 3,
  },
  menu: {
    height: 22,
    width: 22,
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 2,
    borderWidth: 0.2,
    color: inactively,
    flex: 1,
    fontSize: 16,
    paddingLeft: 64,
    zIndex: 2,
  },
});

export { styles };