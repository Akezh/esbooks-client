import React from 'react';
import {
  Keyboard,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Underlayer } from '@components';
import { IIncompleteBook } from '@types';
import { mapActionsToProps, mapStateToProps } from './SearchContainerMaps';
import SearchView from '../views';
import {
  SearchContainerStyles as styles,
  SearchbarStyles,
} from '../styles';
import { THEME } from '@constants';

interface IProps {
  hideUnderlayer: () => void;
  isUnderlayerActive: boolean;
  onBookDetails: (item: IIncompleteBook) => void;
  onGoBack: () => void;
  query: string;
  showUnderlayer: () => void;
}

interface IState {
  text: string;
}

const { colors } = THEME;
const { inactively } = colors;

class SearchContainer extends React.Component<IProps, IState> {
  public keyboardDidHideListener: any;
  public textInput: any;

  public state = {
    text: this.props.query,
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

        <SearchView onBookDetails={onBookDetails} />

        {isUnderlayerActive &&
          <Underlayer
            onPress={this.hideUnderlayer}
          />}
      </React.Fragment>
    );
  }

  private Searchbar = (): JSX.Element => {
    const { isUnderlayerActive } = this.props;

    const { text } = this.state;

    const {
      container,
      menuWrapper,
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
          value={text}
        />
        <View
          onStartShouldSetResponder={this.onMenuPress}
          style={menuWrapper}
        >
          <Icon 
            color={inactively} 
            name='arrow-left' 
            size={20}
          />
        </View>
      </View>
    );
  }

  private onSubmitEditing = (): void => {
    const { text } = this.state;
    if (text) {
      Keyboard.dismiss();
    }
  }

  private setTextInputRef = (element: any): void => {
    this.textInput = element;
  }

  private hideUnderlayer = (): void => {
    this.onBlur();
    this.textInput.blur();
  }

  private onMenuPress = (): boolean => {
    const { onGoBack, isUnderlayerActive } = this.props;

    if (isUnderlayerActive) {
      this.hideUnderlayer();
    } else {
      onGoBack();
    }

    return true;
  }

  private onFocus = (): void => {
    const { showUnderlayer } = this.props;

    showUnderlayer();
  }

  private onBlur = (): void => {
    const { hideUnderlayer } = this.props;

    hideUnderlayer();
  }

  private onChangeText = (value: string): void => {
    this.setState({
      text: value,
    });
  }
}

export default connect(mapStateToProps, mapActionsToProps)(SearchContainer);
