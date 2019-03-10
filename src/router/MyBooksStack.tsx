import { createStackNavigator } from 'react-navigation';
import { MyBooks } from '@screens';
import { withSafeAreaView } from '@hocs';

const MyBooksStack = createStackNavigator(
  {
    MyBooks: {
      screen: withSafeAreaView((MyBooks), 'white'),
    },
  }, {
    initialRouteName: 'MyBooks',
    navigationOptions: {
      header: null,
    },
  },
);

export default MyBooksStack;
