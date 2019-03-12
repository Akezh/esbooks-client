import React, { FunctionComponent } from 'react';
import { withSafeAreaView } from '@hocs';
import { IIncompleteBook } from '@types';
import HomeContainer from './containers';

const Home: FunctionComponent<any> = (props): JSX.Element => {
  const { navigation } = props;
  const { navigate } = navigation;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const onBookDetails = (item: IIncompleteBook) => {
    navigate('BookDetails', { data: item });
  };

  const onSearch = (query: string) => {
    navigate('Search', { query });
  };

  return (
    <HomeContainer {...props} openDrawer={openDrawer} onSearch ={onSearch} onBookDetails={onBookDetails} />
  );
};

export default withSafeAreaView(Home);