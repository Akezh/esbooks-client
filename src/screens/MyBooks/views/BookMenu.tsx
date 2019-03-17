import React, { Component } from 'react';
import Menu, { MenuDivider, MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '@constants';
import { BookMenuStyles as styles } from '../styles';
import { TouchableRipple } from 'react-native-paper';

interface IProps {
  callBookRemovalWarning: () => void;
  onChangeMyBook: () => void;
}

const { colors } = THEME;
const { text } = colors;

class BookMenu extends Component<IProps> {
  private menu: any;

  public render() {
    return (
        <Menu
          button={this.renderBookMenu()}
          ref={this.setMenuRef}
        >
          <React.Fragment>
            <MenuItem
              onPress={this.onChangeMyBook}
              style={styles.menuItem}
              textStyle={styles.menuItemText}
              underlayColor='#1ab3ff'
            >
              CHANGE
            </MenuItem>
            <MenuDivider />

            <MenuItem
              onPress={this.onRemovePress}
              style={styles.menuItem}
              textStyle={styles.menuItemText}
              underlayColor='#1ab3ff'
            >
              REMOVE
            </MenuItem>
          </React.Fragment>
        </Menu>
    );
  }

  private renderBookMenu = (): JSX.Element => {
    return (
      <TouchableRipple
        style={styles.menuBtn}
        onPress={this.showMenu}
      >
        <Icon
          color={text}
          name='settings-outline'
          size={22}
        />
      </TouchableRipple>
    );
  }

  private setMenuRef = (element: JSX.Element): void => {
    this.menu = element;
  }

  private showMenu = (): void => {
    this.menu.show();
  }

  private hideMenu = (): void => {
    this.menu.hide();
  }

  private onRemovePress = (): void => {
    const { callBookRemovalWarning } = this.props;

    this.hideMenu();
    callBookRemovalWarning();
  }

  private onChangeMyBook = (): void => {
    this.hideMenu();
    this.props.onChangeMyBook();
  }
}

export default BookMenu;