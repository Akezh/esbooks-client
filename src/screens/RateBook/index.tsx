import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import {
  withKeyboardAvoidingView,
  withSafeAreaView,
  withScrollView,
} from '@hocs';
import { RateBookContainer } from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const RateBook: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { goBack, state } = navigation;
  const { params } = state;
  const { data, value } = params;
  const { setMyRating } = data;

  const onGoBack = (rating: number): void => {
    goBack();
    setMyRating(rating);
  };

  return (
    <RateBookContainer
      data={data}
      onGoBack={onGoBack}
      rating={value}
    />
  );
};

export default withSafeAreaView(withKeyboardAvoidingView(withScrollView(RateBook, 'handled')), 'white');