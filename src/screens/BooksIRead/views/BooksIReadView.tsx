import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { BOOKS_I_READ_DATA, THEME } from '@constants';
import { withScrollView } from '@hocs';
import BookIReadList from './BookIReadList';

const { colors } = THEME;
const { primary } = colors;

const BooksIReadView: FunctionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <BookIReadList data={BOOKS_I_READ_DATA} nav={null} />
      <StatusBar backgroundColor={primary} barStyle='light-content' />
    </React.Fragment>
  );
};

export default withScrollView(BooksIReadView);
