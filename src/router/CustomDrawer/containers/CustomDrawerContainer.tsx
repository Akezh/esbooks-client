import React, { FunctionComponent } from 'react';
import {
  DrawerItem,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { connect } from 'react-redux';
import { LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';
import { PROVIDER } from '@constants';
import { mapStateToProps, mapActionsToProps } from './CustomDrawerContainerMaps';
import { CustomDrawerView } from '../views';

interface IProps {
  activeItemKey: string;
  navigation: NavigationScreenProp<NavigationState>;
  signOut: () => void;
  provider: string;
}

const CustomDrawerContainer: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation, signOut, provider } = props;

  return (
    <CustomDrawerView
      {...props}
      onItemPress={(item: any) => onItemPress(item, navigation, signOut, provider)}
    />
  );
};

const onItemPress = async (item: DrawerItem, navigation, signOut: () => void, provider: string) => {
  const { navigate } = navigation;
  const { route } = item;
  const { routeName } = route;

  switch(routeName) {
    case 'SignOut': {
      switch(provider) {
        case PROVIDER.Google:
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          break;
        case PROVIDER.Facebook:
          await LoginManager.logOut();
          break;
      }

      await signOut();
      navigate('Auth');
      break;
    }
    default: navigate(routeName);
  }
};

export default connect(mapStateToProps, mapActionsToProps)(CustomDrawerContainer);
