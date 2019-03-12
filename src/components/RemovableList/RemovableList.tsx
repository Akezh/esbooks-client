import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import RemovableListItem from './RemovableListItem';
import { RemovableListStyles as styles } from './styles';

interface IProps {
  data: string[];
  removeItem: (item: string) => void;
}

const RemovableList: FunctionComponent<IProps> = (props): JSX.Element => {
  const { data, removeItem } = props;

  return (
    <View style={styles.container}>
      {data.map((item) => renderRemovableListItem(item, removeItem))}
    </View>
  );
};

const renderRemovableListItem = (item: string, removeItem: (item: string) => void): JSX.Element => {
  return (
    <RemovableListItem
      item={item}
      key={item}
      removeItem={removeItem}
    />
  );
};

export default RemovableList;