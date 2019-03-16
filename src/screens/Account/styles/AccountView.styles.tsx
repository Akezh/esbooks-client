import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { primary } = colors;
const { regular } = fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: primary,
    padding: 24,
    paddingVertical: 16,
  },
  imageWrapper: {
    height: 120,
    position: 'relative',
    width: 120,
  },
  image: {
    height: 120,
    marginBottom: 24,
    width: 120,
  },
  imageIconRemove: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 136, 204, 0.35)',
    borderRadius: 28,
    height: 28,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: 16,
    width: 28,
  },
  fullname: {
    color: '#FFF',
    fontFamily: regular,
    fontSize: 16,
  },
  email: {
    color: '#FFF',
    fontFamily: regular,
    fontSize: 14,
    opacity: 0.7,
  },
  cameraBtnsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 16,
  },
  cameraBtnWrapperMargin: {
    marginRight: 12,
  },
  cameraBtnWrapper: {
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  cameraBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    paddingHorizontal: 16,
  },
  cameraBtnText: {
    color: '#FFF',
    fontFamily: regular,
    fontSize: 14,
    marginRight: 8,
  },
});

export { styles };