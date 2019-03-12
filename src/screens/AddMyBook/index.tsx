import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import AddMyBookContainer from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const AddMyBook: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { goBack, navigate } = navigation;

  const onGoBack = (): void => {
    goBack();
  };

  const onMoreItems = (type: string, data: string[], selectedItems: string[], setItems: (type: string, items: string[]) => void): void => {
    navigate('MoreItems', {
      data,
      selectedItems,
      setItems,
      type,
    });
  };

  return (
    <AddMyBookContainer
      navigation={navigation}
      onGoBack={onGoBack}
      onMoreItems={onMoreItems}
    />
  );
};

export default AddMyBook;