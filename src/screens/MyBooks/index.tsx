import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import MyBooksContainer from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const MyBooks: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { navigate } = navigation;

  const onGoBack = () => {
    navigate('Home');
  };

  const onAddMyBook = (): void => {
    navigate('AddMyBook');
  };

  return <MyBooksContainer
    onAddMyBook={onAddMyBook}
    onGoBack={onGoBack}
  />;
};

export default MyBooks;