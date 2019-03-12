import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { MY_BOOK_DATA, THEME } from '@constants';
import { withScrollView } from '@hocs';
import MyBookList from './MyBookList';

interface IProps {
  callBookReturnAlert: () => void;
}

const { colors } = THEME;
const { primary } = colors;

const MyBooksView: FunctionComponent<IProps> = (props): JSX.Element => {
  const { callBookReturnAlert } = props;

  const nav = {
    callBookReturnAlert,
  };
  return (
    <React.Fragment>
      <MyBookList
        data={MY_BOOK_DATA}
        nav={nav}
      />
      <StatusBar
        backgroundColor={primary}
        barStyle='light-content'
      />
    </React.Fragment>
  );
};

export default withScrollView(MyBooksView);