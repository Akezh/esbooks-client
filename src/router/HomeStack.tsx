import { createStackNavigator } from 'react-navigation';
import { BookDetails, Home, RateBook, Search } from '@screens';
import { withSafeAreaView } from '@hocs';
import { THEME } from '@constants';
const { colors } = THEME;
const { primary } = colors;

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: withSafeAreaView((Home), primary),
    },
    BookDetails: {
      screen: withSafeAreaView((BookDetails), primary),
    },
    Search: {
      screen: withSafeAreaView((Search), primary),
    },
    RateBook: {
      screen: withSafeAreaView((RateBook), primary),
    },
  }, {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null,
    },
  },
);

export default HomeStack;
