import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IIncompliteBook, IRateBookData } from '@types';
import BookDetailsView from '../views';
import { BookDetailsContainerStyles as styles } from '../styles';

interface IProps {
  incompliteData: IIncompliteBook;
  onGoBack: () => void;
  onRateBook: (item: IRateBookData, value?: number) => void;
}

const BookDetailsContainer: FunctionComponent<IProps> = (props): JSX.Element => {
  const { incompliteData, onGoBack, onRateBook } = props;

  return (
    <React.Fragment>
      <View style={styles.headerContainer}>
        <Icon
          color='#FFF'
          name='arrow-left'
          onPress={onGoBack}
          size={24}
          style={styles.arrow_back}
        />
        <Text style={styles.title}>Employes Share Books</Text>
      </View>

      <BookDetailsView
        incompliteData={incompliteData}
        onRateBook={onRateBook}
      />
    </React.Fragment>
  );
};

export default BookDetailsContainer;