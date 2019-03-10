import { createDrawerNavigator } from 'react-navigation';
import MainStack from './MainStack';
import MyBooksStack from './MyBooksStack';

const Drawer = createDrawerNavigator(
  {
    MainStack: {
      screen: MainStack,
    },
    MyBooksStack: {
      screen: MyBooksStack,
    },
  }, {
    initialRouteName: 'MainStack',
  },
);

export default Drawer;
