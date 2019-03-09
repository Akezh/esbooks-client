import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { CategoryListItemStyles as styles } from './styles';

interface IProps {
  item: string;
}

const CategoryList: FunctionComponent<IProps> = (props): JSX.Element => {
  const { item } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

export default CategoryList;