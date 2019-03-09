import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import TagListItem from './TagListItem';
import { TagListStyles as styles } from './styles';

interface IProps {
  data: string[];
}

const TagList: FunctionComponent<IProps> = (props): JSX.Element => {
  const { data } = props;

  return (
    <FlatList
      contentContainerStyle={styles.contentContaier}
      data={data}
      horizontal={true}
      keyExtractor={keyExtractor}
      renderItem={renderTagListItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const keyExtractor = (_item: string, index: number): string => index.toString();

const renderTagListItem = ({ item }: { item: string }): JSX.Element => {
  return (
    <TagListItem item={item} />
  );
};

export default TagList;