import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { THEME } from '@constants';
import { RateBookViewStyles as styles } from '../styles';

interface IProps {
  onFinishRating: (value: number) => void;
  rating: number;
}

const { colors } = THEME;
const { primary } = colors;

const RateBookView: FunctionComponent<IProps> = (props): JSX.Element => {
  const { onFinishRating, rating } = props;

  return (
    <View style={styles.container}>
      <View style={styles.ratingWrapper}>
        <AirbnbRating
          count={5}
          defaultRating={rating}
          onFinishRating={onFinishRating}
          selectedColor={primary}
          showRating={false}
          size={24}
        />
      </View>
    </View>
  );
};



export default RateBookView;
