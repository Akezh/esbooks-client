import { createStackNavigator } from 'react-navigation';
import {
  AddAndChangeMyBook,
  MoreItems,
  MyBooks,
  TheQueueForTheBook,
} from '@screens';
import { withSafeAreaView } from '@hocs';

import { THEME } from '@constants';
const { colors } = THEME;
const { primary } = colors;

const MyBooksStack = createStackNavigator(
  {
    MyBooks: {
      screen: withSafeAreaView((MyBooks), primary),
    },
    AddAndChangeMyBook: {
      screen: withSafeAreaView((AddAndChangeMyBook), primary),
    },
    MoreItems: {
      screen: withSafeAreaView((MoreItems), primary),
    },
    TheQueueForTheBook: {
      screen: withSafeAreaView((TheQueueForTheBook), primary),
    },
  }, {
    initialRouteName: 'MyBooks',
    navigationOptions: {
      header: null,
    },
  },
);

export default MyBooksStack;
