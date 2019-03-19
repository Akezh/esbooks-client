import React, { FunctionComponent } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { THEME } from '@constants';
import { AppRouter } from '@router';
import store from '@stores';

console.disableYellowBox = true;

const App: FunctionComponent = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PaperProvider theme={THEME}>
        <AppRouter />
      </PaperProvider>
    </Provider>
  );
};

export default App;
