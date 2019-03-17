import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const withScrollView = (
  WrappedComponent: any,
  scrollViewKeyboardShouldPersistTaps: any = 'never',
  backgroundColor: string = '#FFF',
) => (props: any): JSX.Element => {
  return (
    <ScrollView
      keyboardShouldPersistTaps={scrollViewKeyboardShouldPersistTaps}
      style={[styles.container, { backgroundColor }]}
    >
      <WrappedComponent {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withScrollView;
