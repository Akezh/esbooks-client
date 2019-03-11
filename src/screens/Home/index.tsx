import React, { FunctionComponent } from 'react';
import { withSafeAreaView } from '@hocs';
import { IIncompliteBook } from '@types';
import HomeContainer from './containers';

const Home: FunctionComponent<any> = (props): JSX.Element => {
  const { navigation } = props;
  const { navigate } = navigation;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const onBookDetails = (item: IIncompliteBook) => {
    navigate('BookDetails', { data: item });
  };

  return (
    <HomeContainer {...props} openDrawer={openDrawer} onBookDetails={onBookDetails} />
  );
};

export default withSafeAreaView(Home);