import { createDrawerNavigator } from 'react-navigation';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator(
  {
    MainStack: {
      screen: MainStack,
    },
  }, {
    initialRouteName: 'MainStack',
  },
);

export default Drawer;
