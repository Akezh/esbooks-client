import React, { FunctionComponent } from 'react';
import { withScrollView } from '@hocs';
import SignInContainer from './containers';

const SignIn: FunctionComponent = (): JSX.Element => {
  return <SignInContainer />;
};

export default withScrollView(SignIn);