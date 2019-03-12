import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { MoreItemsContainer } from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const MoreItems: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { goBack, state } = navigation;
  const { params } = state;
  const {
    data,
    selectedItems,
    setItems,
    type,
  } = params;

  const onGoBack = (items: string[]): void => {
    goBack();
    setItems(type, items);
  };

  return (
    <MoreItemsContainer
      data={data}
      navigation={navigation}
      onGoBack={onGoBack}
      selectedItems={selectedItems}
      type={type}
    />
  );
};

export default MoreItems;