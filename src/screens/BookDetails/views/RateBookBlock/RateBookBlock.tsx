import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { THEME } from '@constants';
import { OTHER } from '@static';
import { IRateBookData } from '@types';
import { RateBookBlockStyles as styles } from '../../styles';

interface IProps {
  data: any;
  onRateBook: (item: IRateBookData, value?: number) => void;
}

const { colors } = THEME;
const { primary, placeholder } = colors;

const RateBookBlock: FunctionComponent<IProps> = (props): JSX.Element => {
  const { data, onRateBook } = props;
  const { myRating } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate this book</Text>
      <Text style={styles.additionalText}>Tell others what you think</Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onRateBook(data, myRating)}
      >
        <Rating
          imageSize={30}
          ratingBackgroundColor={placeholder}
          ratingColor={primary}
          ratingCount={5}
          ratingImage={OTHER.star}
          readonly={true}
          startingValue={myRating}
          type='custom'
        />
      </TouchableOpacity>
      <TouchableRipple
        onPress={() => onRateBook(data, myRating)}
        style={styles.writeReviewBtn}
      >
        <Text style={styles.writeReviewBtnText}>Write a review</Text>
      </TouchableRipple>
    </View>
  );
};

export default RateBookBlock;
