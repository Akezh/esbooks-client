import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const avatarSize = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: THEME.colors.primary,
    padding: 16,
  },
  avatarWrapper: {
    backgroundColor: '#F0F0F0',
    borderRadius: avatarSize,
    height: avatarSize,
    width: avatarSize,
  },
  avatar: {
    borderRadius: avatarSize,
    height: avatarSize,
    width: avatarSize,
  },
  welcome: {
    color: 'white',
    fontFamily: THEME.fonts.bold,
    fontSize: 17,
    marginBottom: 4,
    marginTop: 6,
    opacity: 0.85,
  },
  username: {
    color: 'white',
    fontFamily: THEME.fonts.medium,
    fontSize: 14,
    opacity: 0.85,
  },
  email: {
    color: 'white',
    fontFamily: THEME.fonts.medium,
    fontSize: 14,
    opacity: 0.6,
  },
  containerDrawerItemsStyle: {
    backgroundColor: '#FFFFFF',
    paddingTop: 4,
  },
});

export { styles };