import { View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { BooksIRead } from '@screens';
import CustomDrawer from './CustomDrawer';
import HomeStack from './HomeStack';
import MyBooksStack from './MyBooksStack';

const Drawer = createDrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: () => ({
        drawerLabel: 'Home',
      }),
    },
    MyBooksStack: {
      screen: MyBooksStack,
      navigationOptions: () => ({
        drawerLabel: 'My books',
      }),
    },
    BooksIRead: {
      screen: BooksIRead,
      navigationOptions: () => ({
        drawerLabel: 'Books I read',
      }),
    },
    SignOut: {
      screen: () => View,
      navigationOptions: () => ({
        drawerLabel: 'Sign out',
      }),
    },
  }, {
    initialRouteName: 'HomeStack',
    contentComponent: CustomDrawer,
  },
);

export default Drawer;
