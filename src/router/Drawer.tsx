import { createDrawerNavigator } from 'react-navigation';
import { Main } from '@screens';

const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: Main,
    },
  }, {
    initialRouteName: 'Main',
  },
);

export default Drawer;
