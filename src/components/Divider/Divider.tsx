import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styles from './Divider.styles';

const Divider: FunctionComponent = (): JSX.Element => {
  return (
    <View style={styles.divider} />
  );
};

export default Divider;