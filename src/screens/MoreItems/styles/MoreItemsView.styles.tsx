import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { fonts } = THEME;
const { regular } = fonts;

const styles = StyleSheet.create({
  textInput: {
    margin: 8,
  },
  RemovableList: {
    marginHorizontal: 16,
  },
  moreItem: {
    borderBottomColor: 'rgba(0,0,0,0.05)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginTop: 2,
    padding: 16,
    paddingVertical: 12,
  },
  moreItemText: {
    color: '#4B5A71',
    flex: 1,
    fontFamily: regular,
    fontSize: 16,
  },
});

export { styles };