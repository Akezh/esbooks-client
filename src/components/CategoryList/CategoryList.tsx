import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import CategoryListItem from './CategoryListItem';
import { CategoryListStyles as styles } from './styles';

interface IProps {
  data: string[];
}

const CategoryList: FunctionComponent<IProps> = (props): JSX.Element => {
  const { data } = props;

  return (
    <View style={styles.container}>
      {data.map(renderCategoryListItem)}
    </View>
  );
};

const renderCategoryListItem = (item: string): JSX.Element => {
  return (
    <CategoryListItem key={item} item={item} />
  );
};

export default CategoryList;