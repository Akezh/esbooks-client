import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import MyBooksContainer from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const MyBooks: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { navigate } = navigation;

  const onGoBack = (): void => {
    navigate('Home');
  };

  const onBookDetails = (): void => { };

  return <MyBooksContainer
    onBookDetails={onBookDetails}
    onGoBack={onGoBack}
  />;
};

export default MyBooks;