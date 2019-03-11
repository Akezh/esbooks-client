import React, { FunctionComponent, Fragment } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import {
  DrawerItem,
  DrawerItems,
  DrawerScene,
  NavigationRoute,
  NavigationScreenProp,
  NavigationState,
  SafeAreaView,
} from 'react-navigation';
import { connect } from 'react-redux';
import { withScrollView } from '@hocs';
import Divider from './Divider';
import { CustomDrawerView as styles } from '../styles';
import { mapActionsToProps, mapStateToProps } from './CustomDrawerViewMaps';
import { PLACEHOLDERS } from '@static';

interface IProps {
  isLogged: boolean;
  token: string;
  user: {
    avatar: string;
    email: string;
    fullName: string;
  };
  activeItemKey: string;
  drawerPosition: 'left' | 'right';
  getLabel: (scene: DrawerScene) => React.ReactNode | string;
  items: NavigationRoute[];
  navigation: NavigationScreenProp<NavigationState>;
  onItemPress: (info: DrawerItem) => void;
  renderIcon: (scene: DrawerScene) => React.ReactNode;
}


const { default_user_avatar } = PLACEHOLDERS;

const CustomDrawerView: FunctionComponent<IProps> = (props): JSX.Element => {
  const { user } = props;
  const { avatar, email, fullName } = user;

  const renderHeader = () => {
    return (
    <View style={styles.header}>
      {renderAvatar()}
      {renderWelcomeUser()}
    </View>);
  };

  const renderAvatar = () => {
    return (
      <View style={styles.avatarWrapper}>
        <Image
          resizeMethod='resize'
          source={avatar ? { uri: avatar } : default_user_avatar }
          style={styles.avatar}
        />
      </View>
    );
  };

  const renderWelcomeUser = () => {
    return (
      <Fragment>
        <Text style={styles.welcome}>Comrade reader</Text>
        <Text style={styles.username}>{fullName}</Text>
        <Text style={styles.email}>{email}</Text>
      </Fragment>
    );
  };

  const renderDrawerItems = () => {
    return (
      <View style={styles.containerDrawerItemsStyle}>
        <DrawerItems {...props} items={[props.items[0], props.items[1]]} />
        <Divider />
        <DrawerItems {...props} items={[props.items[2]]} />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ horizontal: 'never', top: 'always' }}
    >
      {renderHeader()}
      {renderDrawerItems()}
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(withScrollView(CustomDrawerView));