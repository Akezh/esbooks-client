import React, { FunctionComponent } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { THEME } from '@constants';
import { AppRouter } from '@router';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <PaperProvider theme={THEME}>
      <AppRouter />
    </PaperProvider>
  );
};

export default App;