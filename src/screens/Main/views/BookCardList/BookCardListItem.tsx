import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import {
  IIncompliteBook,
  IMainBookCardListItem,
} from '@types';
import BookList from '../BookList';
import { BotsCardListItemStyles as styles } from '../../styles';

interface IProps {
  onBookDetails: (item: IIncompliteBook) => void;
}

const BookCardListItem:
  FunctionComponent<IMainBookCardListItem & IProps> = (props): JSX.Element => {
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