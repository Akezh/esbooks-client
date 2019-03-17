import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { THEME } from '@constants';
import { withScrollView } from '@hocs';
import { IReader } from '@types';
import TheQueueForTheBookList from './TheQueueForTheBookList';

interface IProps {
  nav: any;
  reader: IReader;
  waitingList: IReader[];
}

const { colors } = THEME;
const { primary } = colors;

const TheQueueForTheBookView: FunctionComponent<IProps> = (
  props,
): JSX.Element => {
  const { nav, reader, waitingList } = props;

  return (
    <React.Fragment>
      <TheQueueForTheBookList data={waitingList} nav={nav} reader={reader} />
      <StatusBar backgroundColor={primary} barStyle='light-content' />
    </React.Fragment>
  );
};

export default withScrollView(TheQueueForTheBookView);
