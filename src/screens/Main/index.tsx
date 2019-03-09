import React, { FunctionComponent } from 'react';
import { withSafeAreaView } from '@hocs';
import { IIncompliteBook } from '@types';
import MainContainer from './containers';

const Main: FunctionComponent<any> = (props): JSX.Element => {
  const { navigation } = props;
  const { navigate } = navigation;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const onBookDetails = (item: IIncompliteBook) => {
    navigate('BookDetails', { data: item });
  };

  return (
    <MainContainer {...props} openDrawer={openDrawer} onBookDetails={onBookDetails} />
  );
};

export default withSafeAreaView(Main);