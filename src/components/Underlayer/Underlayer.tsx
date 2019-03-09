import React, { FunctionComponent } from 'react';
import { StatusBar, View } from 'react-native';
import { styles } from './Underlayer.styles';

interface IProps {
  onPress: () => void;
}

const Underlayer: FunctionComponent<IProps> = (props): JSX.Element => {
  const { onPress } = props;

  const onStartShouldSetResponder = (): boolean => {
    onPress();

    return true;
  };

  return (
    <View
      onStartShouldSetResponder={onStartShouldSetResponder}
      style={styles.underlayer}
    >
      <StatusBar
        backgroundColor='#002233'
        barStyle='light-content'
      />
    </View>
  );
};

export default Underlayer;