import React, { FunctionComponent } from 'react';
import { withSafeAreaView } from '@hocs';
import SearchContainer from './containers';

const Search: FunctionComponent<any> = (props): JSX.Element => {
  const { navigation } = props;
  const { navigate, goBack, state } = navigation;
  const { params } = state;
  const { query } = params;

  const onGoBack = () => {
    goBack();
  };

  const onBookDetails = (bookId: any) => {
    navigate('BookDetails', { bookId });
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
