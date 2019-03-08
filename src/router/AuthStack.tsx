import { createStackNavigator } from 'react-navigation';
import { SignIn } from '@screens';
import { withSafeAreaView } from '@hocs';

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: withSafeAreaView(SignIn, '#0C1028'),
    },
  }, {
    initialRouteName: 'SignIn',
    navigationOptions: {
      header: null,
    },
  },
);

export default AuthStack;
