import React, { FunctionComponent } from 'react';
import { withSafeAreaView } from '@hocs';
import MainContainer from './containers';

const Main: FunctionComponent<any> = (props): JSX.Element => {
  const { navigation } = props;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <MainContainer {...props} openDrawer={openDrawer} />
  );
};

export default withSafeAreaView(Main);