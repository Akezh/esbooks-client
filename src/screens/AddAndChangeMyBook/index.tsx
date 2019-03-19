import React, { FunctionComponent } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import AddAndChangeMyBookContainer from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const AddAndChangeMyBook: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;
  const { replace, navigate } = navigation;
  const { state } = navigation;
  const { params } = state;
  const { dataBookThatWeChange, screenType } = params;

  const onGoBack = (): void => {
    replace('MyBooks');
  };

  const onMoreItems = (
    type: string,
    data: string[],
    selectedItems: string[],
    setItems: (type: string, items: string[]) => void,
  ): void => {
    navigate('MoreItems', {
      data,
      selectedItems,
      setItems,
      type,
    });
  };

  return (
    <AddAndChangeMyBookContainer
      dataBookThatWeChange={dataBookThatWeChange}
      navigation={navigation}
      onGoBack={onGoBack}
      onMoreItems={onMoreItems}
      screenType={screenType}
    />
  );
};

export default AddAndChangeMyBook;
