import React from 'react';
import {
  Animated,
  Easing,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';
import { Underlayer } from '@components';
import { IIncompleteBook } from '@types';
import { mapActionsToProps, mapStateToProps } from './HomeContainerMaps';
import HomeView from '../views';
import {
  HomeContainerStyles as styles,
  SearchbarStyles,
} from '../styles';

interface IProps {
  hideUnderlayer: () => void;
  isUnderlayerActive: boolean;
  onBookDetails: (item: IIncompleteBook) => void;
  openDrawer: () => void;
  showUnderlayer: () => void;
  onSearch: (query: string) => void;
}

interface IState {
  menuIconProgress: any;
  text: string;
}

class HomeContainer extends React.Component<IProps, IState> {
  public keyboardDidHideListener: any;
  public textInput: any;

  public state = {
    menuIconProgress: new Animated.Value(0),
    text: '',
  };

  public componentDidMount() {
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.hideUnderlayer,
    );
  }

  public componentWillUnmount() {
    this.keyboardDidHideListener.remove();
  }

  public render() {
    const {
      isUnderlayerActive,
      onBookDetails,
    } = this.props;

    return (
      <React.Fragment>
        <View style={styles.header}>
          {this.Searchbar()}
        </View>

        <HomeView onBookDetails={onBookDetails} />

        {isUnderlayerActive &&
          <Underlayer
            onPress={this.hideUnderlayer}
          />}
      </React.Fragment>
    );
  }

  private Searchbar = (): JSX.Element => {
    const { isUnderlayerActive } = this.props;

    const {
      menuIconProgress,
      text,
    } = this.state;

    const {
      container,
      menu,
      menuWrapper,
      placeholder,
      placeholderWrapper,
      placeholderSpecPart,
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
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          onFocus={this.onFocus}
          onSubmitEditing={this.onSubmitEditing}
          ref={this.setTextInputRef}
          returnKeyType='search'
          style={textInput}
          value={isUnderlayerActive ? text : ''}
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

        {isUnderlayerActive
          ? null
          : <TouchableOpacity
            activeOpacity={1}
            onPress={this.showUnderlayer}
            style={placeholderWrapper}
          >
            <Text style={placeholder}>Employees Share</Text>
            <Text style={[placeholder, placeholderSpecPart]}> Books</Text>
          </TouchableOpacity>}
      </View>
    );
  }

  private onSubmitEditing = (): void => {
    const { text } = this.state;
    const { onSearch } = this.props;
    
    if (text) {
      this.hideUnderlayer();
      Keyboard.dismiss();
      onSearch(text);    
    }    
  }

  private setTextInputRef = (element: any): void => {
    this.textInput = element;
  }

  private hideUnderlayer = (): void => {
    this.onBlur();
    this.textInput.blur();
  }

  private showUnderlayer = (): void => {
    this.onFocus();
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

  private onFocus = (): void => {
    const { showUnderlayer } = this.props;

    this.startMenuAnimation();
    showUnderlayer();
  }

  private startMenuAnimation = (): void => {
    const { menuIconProgress } = this.state;

    Animated.timing(menuIconProgress, {
      toValue: 0.5,
      duration: 436,
      easing: Easing.linear,
    }).start();
  }

  private onBlur = (): void => {
    const { hideUnderlayer } = this.props;

    this.endMenuAnimation();
    hideUnderlayer();
  }

  private endMenuAnimation = (): void => {
    const { menuIconProgress } = this.state;

    Animated.timing(menuIconProgress, {
      toValue: 1,
      duration: 436,
      easing: Easing.linear,
    }).start();
  }

  private onChangeText = (value: string): void => {
    this.setState({
      text: value,
    });
  }
}

export default connect(mapStateToProps, mapActionsToProps)(HomeContainer);
