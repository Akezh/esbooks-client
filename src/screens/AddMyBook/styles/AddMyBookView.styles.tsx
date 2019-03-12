import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { placeholder, primary } = colors;
const { bold, medium, regular } = fonts;

const TEXT = '#4B5A71';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: TEXT,
    fontFamily: bold,
    fontSize: 16,
    marginBottom: 2,
  },
  textUnderTitle: {
    color: placeholder,
    fontFamily: regular,
    fontSize: 14,
    marginBottom: 12,
  },
  cameraBtnsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cameraBtnWrapperMargin: {
    marginRight: 12,
  },
  cameraBtnWrapper: {
    alignItems: 'center',
    borderColor: 'rgba(75,90,113, 0.5)',
    borderRadius: 100,
    borderWidth: 1,
  },
  cameraBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    paddingHorizontal: 16,
  },
  cameraBtnText: {
    color: TEXT,
    fontFamily: regular,
    fontSize: 14,
    marginRight: 8,
  },
  imageWrapper: {
    height: 180,
    marginTop: 4,
    position: 'relative',
    width: 120,
  },
  image: {
    borderColor: primary,
    borderWidth: 2,
    height: 180,
    width: 120,
  },
  imageIconRemove: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 136, 204, 0.35)',
    borderRadius: 28,
    height: 28,
    justifyContent: 'center',
    position: 'absolute',
    right: 8,
    top: 8,
    width: 28,
  },
  textInputContainer: {
    marginTop: 30,
  },
  titleWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  titleWrapperMargin: {
    marginBottom: 0,
  },
  authorsTIWrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
  },
  textInput: {
    flex: 1,
  },
  textInputMargin: {
    marginRight: 12,
  },
  removeAuthorIcon: {
    marginLeft: 8,
  },
  customTextInputWithDropDownText: {
    marginTop: 4,
  },
  publishBtnWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
  publishBtn: {
    alignItems: 'center',
    backgroundColor: primary,
    height: 48,
    justifyContent: 'center',
    width: 148,
    borderRadius: 4,
  },
  publishBtnText: {
    color: '#FFF',
    fontFamily: medium,
    fontSize: 16,
  },
  moreBtnText: {
    color: primary,
    fontFamily: medium,
    fontSize: 14,
    marginBottom: 2,
  },
});

export { styles };