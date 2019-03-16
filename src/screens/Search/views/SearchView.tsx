import React, { FunctionComponent } from 'react';
import { StatusBar, View } from 'react-native';
import { COMPLETE_BOOK_DATA, THEME } from '@constants';
import { withScrollView } from '@hocs';
import { IIncompleteBook } from '@types';
import BookList from './BookList';
import { SearchViewStyles as styles } from '../styles';

interface IProps {
  onBookDetails: (item: IIncompleteBook) => void;
  books: any;
}

const { colors } = THEME;
const { primary } = colors;

const SearchView: FunctionComponent<IProps> = props => {
  const { onBookDetails, books } = props;

  return (
    <View style={styles.container}>
      <BookList data={books} onBookDetails={onBookDetails} />

      <StatusBar backgroundColor={primary} barStyle='light-content' />
    </View>
  );
};

export default withScrollView(SearchView);