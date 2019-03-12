import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { IIncompleteBook, IHomeBookList } from '@types';
import BookListItem from './BookListItem';
import { BookListStyles as styles } from '../../styles';

const BookList: FunctionComponent<IHomeBookList> = (props): JSX.Element => {
  const { data, onBookDetails } = props;

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item }: { item: IIncompleteBook }) => renderBookListItem(item, onBookDetails)}
    />
  );
};

const keyExtractor = (_item: IIncompleteBook, index: number): string => index.toString();

const renderBookListItem = (item: IIncompleteBook, onBookDetails: (item: IIncompleteBook) => void): JSX.Element => {
  return (
    <BookListItem
      item={item}
      onBookDetails={onBookDetails}
    />
  );
};

export default BookList;