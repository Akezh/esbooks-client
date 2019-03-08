import { createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack';

const AppRouter = createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default AppRouter;
