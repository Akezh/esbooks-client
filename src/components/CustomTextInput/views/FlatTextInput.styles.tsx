import { StyleSheet } from 'react-native';

const BORDER_COLOR = 'rgba(168, 182, 200, 0.5)';
const ERROR_COLOR = '#C30404';
const LABEL_COLOR = '#A8B6C8';
const TEXT_COLOR = '#4B5A71';

const flatStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  textInputSection: {
    width: '100%',
  },
  icon: {
    left: 4,
    position: 'absolute',
    top: 16,
  },
  phonePlaceholder: {
    color: '#A8B6C8',
    fontSize: 16,
    left: 20,
    position: 'absolute',
    top: 18,
  },
  textInput: {
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    color: TEXT_COLOR,
    flex: 1,
    fontSize: 16,
  },
  label: {
    color: LABEL_COLOR,
    fontSize: 16,
    position: 'absolute',
  },
  additionalElementsContainer: {
    bottom: 4,
    position: 'absolute',
    right: 0,
  },
  additionalElementsSection: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    paddingRight: 8,
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
    paddingHorizontal: 8,
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

export { flatStyles };
