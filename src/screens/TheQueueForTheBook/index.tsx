import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import TheQueueForTheBookContainer from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const TheQueueForTheBook: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { replace, state } = navigation;
  const { params } = state;
  const { bookId, reader, waitingList } = params;

  const onGoBack = (): void => {
    replace('MyBooks');
  };

  return (
    <TheQueueForTheBookContainer
      bookId={bookId}
      onGoBack={onGoBack}
      reader={reader}
      waitingList={waitingList}
    />
  );
};

export default TheQueueForTheBook;
