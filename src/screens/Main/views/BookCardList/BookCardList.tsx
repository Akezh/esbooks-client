import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import {
  IIncompliteBook,
  IMainBookCardList,
  IMainBookCardListItem,
} from '@types';
import BookCardListItem from './BookCardListItem';
import { BookCardListStyles as styles } from '../../styles';

const BookCardList:
  FunctionComponent<IMainBookCardList> = (props): JSX.Element => {
    const { data, onBookDetails } = props;

    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={({ item }: { item: IMainBookCardListItem }) => renderBookCardListItem(item, onBookDetails)}
      />
    );
  };

const keyExtractor = (_item: IMainBookCardListItem, index: number): string => index.toString();

const renderBookCardListItem = (item: IMainBookCardListItem, onBookDetails: (item: IIncompliteBook) => void): JSX.Element => {
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