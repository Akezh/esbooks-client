import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { THEME } from '@constants';
import { withScrollView } from '@hocs';
import { IReader } from '@types';
import MyBookList from './MyBookList';

interface IProps {
  callBookRemovalWarning: () => void;
  callBookReturnAlert: () => void;
  onChangeMyBook: () => void;
  onTheQueueForTheBook: (reader: IReader, waitingList: IReader[]) => void;
  data: any;
}

const { colors } = THEME;
const { primary } = colors;

const MyBooksView: FunctionComponent<IProps> = (props): JSX.Element => {
  const {
    callBookRemovalWarning,
    callBookReturnAlert,
    onChangeMyBook,
    onTheQueueForTheBook,
    data,
    onBookDetails,
  } = props;

  const nav = {
    callBookRemovalWarning,
    callBookReturnAlert,
    onChangeMyBook,
    onTheQueueForTheBook,
    onBookDetails,
  };

  return (
    <React.Fragment>
      <MyBookList data={data} nav={nav} />
      <StatusBar backgroundColor={primary} barStyle='light-content' />
    </React.Fragment>
  );
};

export default withScrollView(MyBooksView);
