import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { MY_BOOK_DATA, THEME } from '@constants';
import { withScrollView } from '@hocs';
import { IReader } from '@types';
import MyBookList from './MyBookList';

interface IProps {
  callBookRemovalWarning: () => void;
  callBookReturnAlert: () => void;
  onChangeMyBook: () => void;
  onTheQueueForTheBook: (reader: IReader, waitingList: IReader[]) => void;
}

const { colors } = THEME;
const { primary } = colors;

const MyBooksView: FunctionComponent<IProps> = (props): JSX.Element => {
  const {
    callBookRemovalWarning,
    callBookReturnAlert,
    onChangeMyBook,
    onTheQueueForTheBook,
  } = props;

  const nav = {
    callBookRemovalWarning,
    callBookReturnAlert,
    onChangeMyBook,
    onTheQueueForTheBook,
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