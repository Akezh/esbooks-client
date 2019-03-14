import { createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack';
import Drawer from './Drawer';

const AppRouter = createSwitchNavigator(
  {
    App: Drawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default AppRouter;
