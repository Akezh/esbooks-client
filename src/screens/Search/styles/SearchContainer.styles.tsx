import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    height: Header.HEIGHT + 8,
    justifyContent: 'center',
    width: '100%',
    zIndex: 2,
  },
});

export { styles };