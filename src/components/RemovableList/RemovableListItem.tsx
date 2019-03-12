import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RemovableListItemStyles as styles } from './styles';

interface IProps {
  item: string;
  removeItem: (item: string) => void;
}

const RemovableListItem: FunctionComponent<IProps> = (props): JSX.Element => {
  const { item, removeItem } = props;

  return (
    <TouchableRipple
      onPress={() => removeItem(item)}
      style={styles.container}
    >
      <React.Fragment>
        <Text style={styles.text}>{item}</Text>
        <Icon
          color='#FFF'
          name='close'
          size={18}
        />
      </React.Fragment>
    </TouchableRipple>
  );
};

export default RemovableListItem;