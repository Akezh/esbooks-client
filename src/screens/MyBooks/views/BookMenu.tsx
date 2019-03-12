import React, { FunctionComponent } from 'react';
import Menu, { MenuDivider, MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '@constants';
import { BookMenuStyles as styles } from '../styles';
import { TouchableRipple } from 'react-native-paper';

interface IProps {
  callBookRemovalWarning: () => void;
}

const { colors } = THEME;
const { text } = colors;

const BookMenu: FunctionComponent<IProps> = (props): JSX.Element => {
  const { callBookRemovalWarning } = props;

  let menu: any;

  const renderGetBtn = (): JSX.Element => {
    return (
      <TouchableRipple
        style={styles.menuBtn}
        onPress={showMenu}
      >
        <Icon
          color={text}
          name='settings-outline'
          size={22}
        />
      </TouchableRipple>
    );
  };

  const setMenuRef = (element: JSX.Element): void => {
    menu = element;
  };

  const showMenu = (): void => {
    menu.show();
  };

  const hideMenu = (): void => {
    menu.hide();
  };

  const onRemovePress = (): void => {
    hideMenu();
    callBookRemovalWarning();
  };

  return (
    <Menu
      button={renderGetBtn()}
      ref={setMenuRef}
    >
      <React.Fragment>
        <MenuItem
          onPress={hideMenu}
          style={styles.menuItem}
          textStyle={styles.menuItemText}
          underlayColor='#1ab3ff'
        >
          CHANGE
        </MenuItem>
        <MenuDivider />

        <MenuItem
          onPress={onRemovePress}
          style={styles.menuItem}
          textStyle={styles.menuItemText}
          underlayColor='#1ab3ff'
        >
          REMOVE
        </MenuItem>
      </React.Fragment>
    </Menu>
  );
};

export default BookMenu;