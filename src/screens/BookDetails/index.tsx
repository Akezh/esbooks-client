import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { IRateBookData } from '@types';
import BookDetailsContainer from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const BookDetails: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { goBack, navigate, state } = navigation;
  const { params } = state;
  const { bookId } = params;

  const onGoBack = (): void => {
    goBack();
  };

  const onRateBook = (item: IRateBookData, value?: number): void => {
    navigate('RateBook', { data: item, value });
  };

  return (
    <BookDetailsContainer
      bookId={bookId}
      onGoBack={onGoBack}
      onRateBook={onRateBook}
    />
  );
};

export default BookDetails;
