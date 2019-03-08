import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const withSafeAreaView = (WrappedComponent: any, backgroundColor: string = 'transparent') => (props: any): JSX.Element => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <WrappedComponent {...props} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withSafeAreaView;