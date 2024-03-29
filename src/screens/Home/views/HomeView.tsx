import React, { FunctionComponent } from 'react';
import { StatusBar, View } from 'react-native';
import { CARD_DATA, THEME } from '@constants';
import { withScrollView } from '@hocs';
import { IIncompleteBook } from '@types';
import BookCardList from './BookCardList';
import { HomeViewStyles as styles } from '../styles';

interface IProps {
  onBookDetails: (item: IIncompleteBook) => void;
}

const { colors } = THEME;
const { primary } = colors;

const HomeView: FunctionComponent<IProps> = (props) => {
  const {
    onBookDetails,
  } = props;

  return (
    <View style={styles.container}>
      <BookCardList
        data={CARD_DATA}
        onBookDetails={onBookDetails}
      />

      <StatusBar
        backgroundColor={primary}
        barStyle='light-content'
      />
    </View>
  );
};

export default withScrollView(HomeView);