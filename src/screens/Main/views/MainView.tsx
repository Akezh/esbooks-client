import React, { FunctionComponent } from 'react';
import { StatusBar, View } from 'react-native';
import { CARD_DATA } from '@constants';
import { withScrollView } from '@hocs';
import { IIncompliteBook } from '@types';
import BookCardList from './BookCardList';
import { MainViewStyles as styles } from '../styles';

interface IProps {
  onBookDetails: (item: IIncompliteBook) => void;
}

const MainView: FunctionComponent<IProps> = (props) => {
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
        backgroundColor='#0088CC'
        barStyle='light-content'
      />
    </View>
  );
};

export default withScrollView(MainView);