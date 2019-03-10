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
    navigate('Main');
  };

  return <MyBooksContainer onGoBack={onGoBack} />;
};

export default MyBooks;