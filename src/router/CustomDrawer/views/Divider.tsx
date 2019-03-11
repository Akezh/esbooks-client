import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Divider as styles } from '../styles';

const Divider: FunctionComponent = (): JSX.Element => {
  return (
    <View style={styles.divider} />
  );
};

export default Divider;