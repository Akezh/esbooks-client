import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import {
  IIncompleteBook,
  IHomeBookCardList,
  IHomeBookCardListItem,
} from '@types';
import BookCardListItem from './BookCardListItem';
import { BookCardListStyles as styles } from '../../styles';

const BookCardList:
  FunctionComponent<IHomeBookCardList> = (props): JSX.Element => {
    const { data, onBookDetails } = props;

    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={({ item }: { item: IHomeBookCardListItem }) => renderBookCardListItem(item, onBookDetails)}
      />
    );
  };

const keyExtractor = (_item: IHomeBookCardListItem, index: number): string => index.toString();

const renderBookCardListItem = (item: IHomeBookCardListItem, onBookDetails: (item: IIncompleteBook) => void): JSX.Element => {
  const { books, title } = item;

  return (
    <BookCardListItem
      books={books}
      onBookDetails={onBookDetails}
      title={title}
    />
  );
};

export default BookCardList;