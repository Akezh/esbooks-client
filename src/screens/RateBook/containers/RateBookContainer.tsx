import React, { Component } from 'react';
import { Image, View, Text, Alert } from 'react-native';
import { IconButton, TouchableRipple } from 'react-native-paper';
import { THEME } from '@constants';
import { IRateBookData } from '@types';
import { getBotImage } from '@utils';
import { RateBookContainerStyles as styles } from '../styles';
import { RateBookView } from '../views';

interface IProps {
  data: IRateBookData;
  onGoBack: (rating: number) => void;
  rating: number;
}

interface IState {
  rating: number;
}

const { colors } = THEME;
const { inactively } = colors;

class RateBookContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { rating } = this.props;

    this.state = {
      rating,
    };
  }

  render() {
    const { data, onGoBack } = this.props;
    const { rating } = this.state;
    const { title, image } = data;

    const isActivePostBtn = rating !== 0;

    return (
      <React.Fragment>
        <View style={styles.headerContainer}>
          <IconButton
            color={inactively}
            icon='close'
            onPress={this.callAlert}
            size={24}
            style={styles.close}
          />
          <Image
            source={getBotImage(image)}
            style={styles.image}
          />
          <View style={styles.headerTextWrapper}>
            <Text
              style={styles.title}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text>Rate this book</Text>
          </View>
          <TouchableRipple
            rippleColor='rgba(0, 0, 0, .14)'
            onPress={() => onGoBack(rating)}
            style={styles.postBtn}
            disabled={!isActivePostBtn}
          >
            <Text
              style={[styles.postBtnText, isActivePostBtn
                ? styles.activePostBtnText
                : styles.inactivePostBtnText]}
            >
              POST
            </Text>
          </TouchableRipple>
        </View>

        <RateBookView
          onFinishRating={this.onFinishRating}
          rating={rating}
        />
      </React.Fragment>
    );
  }

  private callAlert = (): void => {
    const { onGoBack } = this.props;

    Alert.alert(
      '',
      'Discard draft?',
      [
        { text: 'KEEP' },
        {
          text: 'DISCARD',
          onPress: () => onGoBack(0),
          style: 'cancel',
        },
      ],
    );
  }

  private onFinishRating = (value: number): void => {
    this.setState({
      rating: value,
    });
  }
}

export default RateBookContainer;
