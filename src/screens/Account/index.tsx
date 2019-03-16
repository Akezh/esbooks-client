import React, { FunctionComponent } from 'react';
import { withSafeAreaView } from '@hocs';
import AccountContainer from './containers';

const Account: FunctionComponent<any> = (props): JSX.Element => {
  const { navigation } = props;
  const { goBack } = navigation;

  const onGoBack = () => {
    goBack();
  };

  return <AccountContainer onGoBack={onGoBack} />;
};

export default withSafeAreaView(Account);
