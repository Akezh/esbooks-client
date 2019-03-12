import { createStackNavigator } from 'react-navigation';
import { AddMyBook, MoreItems, MyBooks } from '@screens';
import { withSafeAreaView } from '@hocs';

const MyBooksStack = createStackNavigator(
  {
    MyBooks: {
      screen: withSafeAreaView((MyBooks), 'white'),
    },
    AddMyBook: {
      screen: withSafeAreaView((AddMyBook), 'white'),
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
