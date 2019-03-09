import React from 'react';
import { Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { IIncompliteBook } from '@types';
import { mapActionsToProps, mapStateToProps } from './MainContainerMaps';
import MainView from '../views';

interface IProps {
  hideUnderlayer: () => void;
  isUnderlayerActive: boolean;
  onBookDetails: (item: IIncompliteBook) => void;
  openDrawer: () => void;
  showUnderlayer: () => void;
}

interface IState {
  menuIconProgress: any;
  text: string;
}

class MainContainer extends React.Component<IProps, IState> {
  public state = {
    menuIconProgress: new Animated.Value(0),
    text: '',
  };

  public render() {
    const {
      isUnderlayerActive,
      onBookDetails,
      openDrawer,
    } = this.props;

    const {
      menuIconProgress,
      text,
    } = this.state;

    return (
      <MainView
        isUnderlayerActive={isUnderlayerActive}
        menuIconProgress={menuIconProgress}
        onBlur={this.onBlur}
        onBookDetails={onBookDetails}
        onChangeText={this.onChangeText}
        onFocus={this.onFocus}
        openDrawer={openDrawer}
        text={isUnderlayerActive ? text : ''}
      />
    );
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

export default connect(mapStateToProps, mapActionsToProps)(MainContainer);
