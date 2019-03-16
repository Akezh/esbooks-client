import { Platform, StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { fonts } = THEME;
const { regular } = fonts;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  dropDownTextContainer: {
    position: 'relative',
  },
  dropDownTextSection: {
    backgroundColor: 'white',
    borderColor: 'rgba(168, 182, 200, 0.5)',
    borderRadius: 4,
    borderWidth: 1,
    paddingVertical: 6,
    position: Platform.OS === 'ios' ? 'relative' : 'absolute',
    width: '100%',
    zIndex: 1,
  },
  dropDownTextItem: {
    justifyContent: 'center',
    marginTop: 2,
    padding: 12,
    paddingVertical: 8,
  },
  dropDownText: {
    color: '#4B5A71',
    flex: 1,
    fontFamily: regular,
    fontSize: 14,
  },
});

export { styles };
