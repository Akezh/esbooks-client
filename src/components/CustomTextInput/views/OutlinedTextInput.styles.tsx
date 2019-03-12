import { StyleSheet } from 'react-native';

const BORDER_COLOR = 'rgba(168, 182, 200, 0.5)';
const ERROR_COLOR = '#C30404';
const LABEL_COLOR = '#A8B6C8';
const TEXT_COLOR = '#4B5A71';

const outlinedStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  textInputSection: {
    minHeight: 58,
    width: '100%',
  },
  icon: {
    bottom: 8,
    left: 0,
    position: 'absolute',
  },
  phonePlaceholder: {
    color: '#A8B6C8',
    fontSize: 16,
    left: 20,
    position: 'absolute',
    top: 18,
  },
  textInput: {
    borderColor: BORDER_COLOR,
    borderRadius: 6,
    borderWidth: 1,
    color: TEXT_COLOR,
    flex: 1,
    fontSize: 16,
    paddingLeft: 20,
  },
  label: {
    color: LABEL_COLOR,
    fontSize: 16,
    position: 'absolute',
  },
  additionalElementsContainer: {
    bottom: 7,
    position: 'absolute',
    right: 0,
  },
  additionalElementsSection: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    paddingRight: 16,
    position: 'relative',
  },
  additionalBtnWrapper: {
    marginLeft: 6,
    marginRight: 2,
  },
  toggleTextVisibility: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  errorMessage: {
    color: ERROR_COLOR,
    fontSize: 11,
    marginTop: 2,
  },
  errorTextInput: {
    borderColor: ERROR_COLOR,
  },
  error: {
    color: ERROR_COLOR,
  },
  check: {
    marginLeft: 8,
  },
});

export { outlinedStyles };
