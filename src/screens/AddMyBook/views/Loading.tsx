import React, { FunctionComponent } from 'react';
import {
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { THEME } from '@constants';
import { LoadingStyles as styles } from '../styles';

const { colors } = THEME;
const { primary } = colors;

const Loading: FunctionComponent = (): JSX.Element => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={true}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
      >
        <ActivityIndicator
          color={primary}
          size='large'
        />
      </TouchableOpacity>
    </Modal>
  );
};

export default Loading;