import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { THEME } from '@constants';
import { withScrollView } from '@hocs';
import BookIReadList from './BookIReadList';

interface IProps {
  data: any;
}

const { colors } = THEME;
const { primary } = colors;

const BooksIReadView: FunctionComponent<IProps> = (props): JSX.Element => {
  const { data } = props;

  return (
    <React.Fragment>
      <BookIReadList data={data} nav={null} />
      <StatusBar backgroundColor={primary} barStyle='light-content' />
    </React.Fragment>
  );
};

export default withScrollView(BooksIReadView);
