import { View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
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
