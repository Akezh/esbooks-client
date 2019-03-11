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

  const onMain = () => {
    navigation.navigate('Main');
  };

  return <SignInContainer onMain={onMain}/>;
};

export default withScrollView(SignIn);