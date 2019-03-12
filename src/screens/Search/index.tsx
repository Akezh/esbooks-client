import React, { FunctionComponent } from 'react';
import { withSafeAreaView } from '@hocs';
import { IIncompleteBook } from '@types';
import SearchContainer from './containers';

const Search: FunctionComponent<any> = (props): JSX.Element => {
  const { navigation } = props;
  const { navigate, goBack, state } = navigation;
  const { params } = state;
  const { query } = params;

  const onGoBack = () => {
    goBack();
  };

  const onBookDetails = (item: IIncompleteBook) => {
    navigate('BookDetails', { data: item });
  };

  return (
    <SearchContainer 
      onBookDetails={onBookDetails} 
      onGoBack={onGoBack} 
      query={query} 
    />
  );
};

export default withSafeAreaView(Search);