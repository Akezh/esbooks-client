import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { IMyBook, IMyBookList } from '@types';
import MyBookListItem from './MyBookListItem';

const MyBookList: FunctionComponent<IMyBookList> = (props): JSX.Element => {
  const { data, nav } = props;

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => renderBookListItem(item, nav)}
    />
  );
};

const keyExtractor = (_item: IMyBook, index: number): string => index.toString();

const renderBookListItem = (item: IMyBook, nav: any): JSX.Element => {
  return (
    <MyBookListItem
      item={item}
      nav={nav}
    />
  );
};

export default MyBookList;