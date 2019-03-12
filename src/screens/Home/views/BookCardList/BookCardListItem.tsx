import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import {
  IIncompleteBook,
  IHomeBookCardListItem,
} from '@types';
import BookList from '../BookList';
import { BookCardListItemStyles as styles } from '../../styles';

interface IProps {
  onBookDetails: (item: IIncompleteBook) => void;
}

const BookCardListItem:
  FunctionComponent<IHomeBookCardListItem & IProps> = (props): JSX.Element => {
    const {
      books,
      onBookDetails,
      title,
    } = props;

    return (
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <BookList data={books} onBookDetails={onBookDetails} />
      </View>
    );
  };

export default BookCardListItem;