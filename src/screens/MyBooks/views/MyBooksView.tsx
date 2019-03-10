import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { THEME } from '@constants';
import { withScrollView } from '@hocs';

const { colors } = THEME;
const { primary } = colors;

const MyBooksView: FunctionComponent = (): JSX.Element => {
  return (
    <StatusBar
      backgroundColor={primary}
      barStyle='light-content'
    />
  );
};

export default withScrollView(MyBooksView);