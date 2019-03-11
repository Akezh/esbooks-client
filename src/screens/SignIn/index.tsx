import React, { FunctionComponent } from 'react';
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { withScrollView } from '@hocs';
import SignInContainer from './containers';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const SignIn: FunctionComponent<IProps> = (props): JSX.Element => {
  const { navigation } = props;

  const onHome = () => {
    navigation.navigate('Home');
  };

  return <SignInContainer onHome={onHome}/>;
};

export default withScrollView(SignIn);