import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const withScrollView = (WrappedComponent: any, scrollViewKeyboardShouldPersistTaps: any = 'never') => (props: any): JSX.Element => {
  return (
    <ScrollView
      keyboardShouldPersistTaps={scrollViewKeyboardShouldPersistTaps}
      style={styles.container}
    >
      <WrappedComponent {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default withScrollView;
