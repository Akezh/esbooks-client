import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { IIncompliteBook, IMainBookList } from '@types';
import BookListItem from './BookListItem';
import { BookListStyles as styles } from '../../styles';

const BookList: FunctionComponent<IMainBookList> = (props): JSX.Element => {
  const { data, onBookDetails } = props;

  return (
    <FlatList
      contentContainerStyle={styles.contentContaier}
      data={data}
      horizontal={true}
      keyExtractor={keyExtractor}
      renderItem={({ item }: { item: IIncompliteBook }) => renderBookListItem(item, onBookDetails)}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const keyExtractor = (_item: IIncompliteBook, index: number): string => index.toString();

const renderBookListItem = (item: IIncompliteBook, onBookDetails: (item: IIncompliteBook) => void): JSX.Element => {
  return (
    <BookListItem
      item={item}
      onBookDetails={onBookDetails}
    />
  );
};

export default BookList;