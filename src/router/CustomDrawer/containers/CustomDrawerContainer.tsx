import React, { FunctionComponent } from 'react';
import {
  DrawerItem,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { CustomDrawerView } from '../views';

interface IProps {
  activeItemKey: string;
  navigation: NavigationScreenProp<NavigationState>;
}

const CustomDrawerContainer: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;

  return (
    <CustomDrawerView
      {...props}
      onItemPress={(item: any) => onItemPress(item, navigation)}
    />
  );
};

const onItemPress = async (item: DrawerItem, navigation) => {
  const { navigate } = navigation;
  const { route } = item;
  const { routeName } = route;

  switch(routeName) {
    case 'SignOut': break;
    default: navigate(routeName);
  }
};

export default CustomDrawerContainer;
