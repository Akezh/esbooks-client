import { createStackNavigator } from 'react-navigation';
import { BookDetails, Home, RateBook, Search } from '@screens';
import { withSafeAreaView } from '@hocs';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: withSafeAreaView((Home), 'white'),
    },
    BookDetails: {
      screen: withSafeAreaView((BookDetails), 'white'),
    },
    Search: {
      screen: withSafeAreaView((Search), 'white'),
    },
    RateBook: {
      screen: withSafeAreaView((RateBook), 'white'),
    },
  }, {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null,
    },
  },
);

export default HomeStack;
