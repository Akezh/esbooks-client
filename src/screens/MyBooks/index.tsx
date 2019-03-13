import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { COMPLETE_BOOK_DATA } from '@constants';
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

  const onAddAndChangeMyBook = (): void => {
    navigate('AddAndChangeMyBook', { type: 'Add' });
  };

  const onChangeMyBook = (): void => {
    const {
      authors,
      categories,
      description,
      image,
      published,
      publisher,
      subtitle,
      title,
    } = COMPLETE_BOOK_DATA[0];

    const data = {
      authors,
      categories,
      description,
      image,
      published,
      publisher,
      subtitle,
      title,
    };
    navigate('AddAndChangeMyBook', { screenType: 'Change', dataBookThatWeChange: data });
  };

  return <MyBooksContainer
    onAddAndChangeMyBook={onAddAndChangeMyBook}
    onChangeMyBook={onChangeMyBook}
    onGoBack={onGoBack}
  />;
};

export default MyBooks;