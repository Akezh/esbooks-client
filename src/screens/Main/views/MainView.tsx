import React, { Component } from 'react';
import {
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Underlayer } from '@components';
import { CARD_DATA } from '@constants';
import { IIncompliteBook } from '@types';
import BookCardList from './BookCardList';
import {
  MainViewStyles as styles,
  SearchbarStyles,
} from '../styles';

interface IProps {
  isUnderlayerActive: boolean;
  menuIconProgress: any;
  onBlur: () => void;
  onBookDetails: (item: IIncompliteBook) => void;
  onChangeText: (value: string) => void;
  onFocus: () => void;
  openDrawer: () => void;
  text: string;
}

class MainView extends Component<IProps> {
  public keyboardDidHideListener: any;
  public textInput: any;

  public componentDidMount() {
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.hideUnderlayer,
    );
  }

  public componentWillUnmount() {
    this.keyboardDidHideListener.remove();
  }

  render() {
    const {
      isUnderlayerActive,
      onBookDetails,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.Searchbar()}
        </View>

        <BookCardList
          data={CARD_DATA}
          onBookDetails={onBookDetails}
        />

        {isUnderlayerActive &&
          <Underlayer
            onPress={this.hideUnderlayer}
          />}

        <StatusBar
          backgroundColor='#0088CC'
          barStyle='light-content'
        />
      </View>
    );
  }

  private Searchbar = (): JSX.Element => {
    const {
      isUnderlayerActive,
      menuIconProgress,
      onBlur,
      onChangeText,
      onFocus,
      text,
    } = this.props;

    const {
      container,
      menu,
      menuWrapper,
      placeholder,
      placeholderWrapper,
      placholderSpecPart,
      textInput,
    } = SearchbarStyles;

    return (
      <View
        style={container}
      >
        {isUnderlayerActive &&
          <Underlayer
            onPress={this.hideUnderlayer}
          />}
        <TextInput
          blurOnSubmit={false}
          onBlur={onBlur}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onSubmitEditing={this.onSubmitEditing}
          ref={this.setTextInputRef}
          returnKeyType='search'
          style={textInput}
          value={text}
        />
        <View
          onStartShouldSetResponder={this.onMenuPress}
          style={menuWrapper}
        >
          <LottieView
            progress={menuIconProgress}
            source={require('./menu.json')}
            style={menu}
          />
        </View>

        {isUnderlayerActive || text
          ? null
          : <TouchableOpacity
            activeOpacity={1}
            onPress={this.showUnderlayer}
            style={placeholderWrapper}
          >
            <Text style={placeholder}>Employes Share</Text>
            <Text style={[placeholder, placholderSpecPart]}> Books</Text>
          </TouchableOpacity>}
      </View>
    );
  }

  private onSubmitEditing = (): void => {
    const { text } = this.props;
    if (text) {
      Keyboard.dismiss();
    }
  }

  private setTextInputRef = (element: any): void => {
    this.textInput = element;
  }

  private hideUnderlayer = (): void => {
    this.props.onBlur();
    this.textInput.blur();
  }

  private showUnderlayer = (): void => {
    this.props.onFocus();
    this.textInput.focus();
  }

  private onMenuPress = (): boolean => {
    const { openDrawer, isUnderlayerActive } = this.props;

    if (isUnderlayerActive) {
      this.hideUnderlayer();
    } else {
      openDrawer();
    }

    return true;
  }
}

export default MainView;