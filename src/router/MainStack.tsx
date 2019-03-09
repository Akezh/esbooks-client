import { createStackNavigator } from 'react-navigation';
import { BookDetails, Main, RateBook } from '@screens';
import { withSafeAreaView } from '@hocs';

const MainStack = createStackNavigator(
  {
    Main: {
      screen: withSafeAreaView((Main), 'white'),
    },
    BookDetails: {
      screen: withSafeAreaView((BookDetails), 'white'),
    },
    RateBook: {
      screen: withSafeAreaView((RateBook), 'white'),
    },
  }, {
    initialRouteName: 'Main',
    navigationOptions: {
      header: null,
    },
  },
);

export default MainStack;
