import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { TagListItemStyles as styles } from './styles';

interface IProps {
  item: string;
}

const TagList: FunctionComponent<IProps> = (props): JSX.Element => {
  const { item } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.toUpperCase()}</Text>
    </View>
  );
};

export default TagList;