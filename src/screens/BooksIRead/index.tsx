import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import BooksIReadContainer from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const BooksIRead: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { navigate } = navigation;

  const onGoBack = (): void => {
    navigate('Home');
  };

  return (
    <BooksIReadContainer onGoBack={onGoBack} />
  );
};

export default BooksIRead;