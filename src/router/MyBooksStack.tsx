import { createStackNavigator } from 'react-navigation';
import { AddAndChangeMyBook, MoreItems, MyBooks } from '@screens';
import { withSafeAreaView } from '@hocs';

const MyBooksStack = createStackNavigator(
  {
    MyBooks: {
      screen: withSafeAreaView((MyBooks), 'white'),
    },
    AddAndChangeMyBook: {
      screen: withSafeAreaView((AddAndChangeMyBook), 'white'),
    },
    MoreItems: {
      screen: withSafeAreaView((MoreItems), 'white'),
    },
  }, {
    initialRouteName: 'MyBooks',
    navigationOptions: {
      header: null,
    },
  },
);

export default MyBooksStack;
