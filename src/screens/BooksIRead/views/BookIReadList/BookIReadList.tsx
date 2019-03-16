import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { IBookIRead, IBookIReadList } from '@types';
import BookIReadListItem from './BookIReadListItem';

const BookIReadList: FunctionComponent<IBookIReadList> = (
  props,
): JSX.Element => {
  const { data, nav } = props;

  console.log('data', data);
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => renderBookIReadListItem(item, nav)}
    />
  );
};

const keyExtractor = (_item: IBookIRead, index: number): string =>
  index.toString();

const renderBookIReadListItem = (item: IBookIRead, nav: any): JSX.Element => {
  return <BookIReadListItem item={item} nav={nav} />;
};

export default BookIReadList;
