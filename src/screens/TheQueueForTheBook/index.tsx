import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import TheQueueForTheBookContainer from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const TheQueueForTheBook: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { goBack, state } = navigation;
  const { params } = state;
  const { reader, waitingList } = params;

  const onGoBack = (): void => {
    goBack();
  };

  return (
    <TheQueueForTheBookContainer
      onGoBack={onGoBack}
      reader={reader}
      waitingList={waitingList}
    />
  );
};

export default TheQueueForTheBook;