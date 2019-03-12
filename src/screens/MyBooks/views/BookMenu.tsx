import React, { FunctionComponent } from 'react';
import { Image } from 'react-native';
import Menu, { MenuDivider, MenuItem } from 'react-native-material-menu';
import { OTHER } from '@static';
import { IReader } from '@types';
import { BookMenuStyles as styles } from '../styles';
import { TouchableRipple } from 'react-native-paper';

interface IProps {
  waitingList: IReader[];
}

const BookMenu: FunctionComponent<IProps> = (props): JSX.Element => {
  const { waitingList } = props;

  let menu: any;

  const setMenuRef = (element: JSX.Element): void => {
    menu = element;
  };

  const showMenu = (): void => {
    menu.show();
  };

  const hideMenu = (): void => {
    menu.hide();
  };

  const renderGetBtn = (): JSX.Element => {
    return (
      <TouchableRipple
        style={styles.menuBtn}
        onPress={showMenu}
      >
        <Image
          source={OTHER.menu}
          style={styles.menuIcon}
        />
      </TouchableRipple>
    );
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

        {waitingList.length
          ? <MenuItem
            onPress={hideMenu}
            style={styles.menuItem}
            textStyle={styles.menuItemText}
            underlayColor='#1ab3ff'
          >
            SEE THE QUEUE
          </MenuItem> : undefined}

      </React.Fragment>
    </Menu>
  );
};

export default BookMenu;