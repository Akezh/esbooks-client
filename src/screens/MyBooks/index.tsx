import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { COMPLETE_BOOK_DATA } from '@constants';
import { IReader } from '@types';
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
    navigate('AddAndChangeMyBook', { screenType: 'Add' });
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
    navigate('AddAndChangeMyBook', {
      screenType: 'Change',
      dataBookThatWeChange: data,
    });
  };

  const onTheQueueForTheBook = (
    id: string,
    reader: IReader,
    waitingList: IReader[],
  ): void => {
    navigate('TheQueueForTheBook', { bookId: id, reader, waitingList });
  };

  return (
    <MyBooksContainer
      onAddAndChangeMyBook={onAddAndChangeMyBook}
      onChangeMyBook={onChangeMyBook}
      onGoBack={onGoBack}
      onTheQueueForTheBook={onTheQueueForTheBook}
    />
  );
};

export default MyBooks;
