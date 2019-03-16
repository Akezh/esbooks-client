import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

const withKeyboardAvoidingScrollView = (WrappedComponent: any) => (props: any): JSX.Element => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={-500}
      enabled
    >
      <WrappedComponent {...props} />
    </KeyboardAvoidingView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default withKeyboardAvoidingScrollView;
