import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { IReader, ITheQueueForTheBookList } from '@types';
import TheQueueForTheBookListItem from './TheQueueForTheBookListItem';
import { TheQueueForTheBookListStyles as styles } from '../../styles';

const TheQueueForTheBookList: FunctionComponent<ITheQueueForTheBookList> = (
  props,
): JSX.Element => {
  const { data, nav, reader } = props;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item, index }) =>
        renderTheQueueForTheBookListItem(item, index, nav, reader)
      }
    />
  );
};

const keyExtractor = (_item: IReader, index: number): string =>
  index.toString();

const renderTheQueueForTheBookListItem = (
  item: IReader,
  index: number,
  nav: any,
  reader: IReader,
): JSX.Element => {
  return (
    <TheQueueForTheBookListItem
      index={index + 1}
      item={item}
      nav={nav}
      reader={reader}
    />
  );
};

export default TheQueueForTheBookList;
