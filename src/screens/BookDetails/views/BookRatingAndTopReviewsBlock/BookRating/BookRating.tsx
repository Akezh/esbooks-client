import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { THEME } from '@constants';
import { OTHER } from '@static';
import { ICompliteBookRating } from '@types';
import { formatNumberOfVoters } from '@utils';
import BookRatingChart from './BookRatingChart';
import { BookRatingStyles as styles } from '../../../styles';

interface IProps {
  rating: ICompliteBookRating;
}

const { colors } = THEME;
const { primary } = colors;
const { star } = OTHER;

const BookRating: FunctionComponent<IProps> = (props): JSX.Element => {
  const { rating } = props;
  const { avg, components } = rating;

  return (
    <View style={styles.ratingContainer}>
      <View style={styles.ratingLeftSection}>
        <Text style={styles.rating}>{avg}</Text>
        <Rating
          imageSize={14}
          ratingBackgroundColor={'rgba(0,0,0,0.1)'}
          ratingColor={primary}
          ratingCount={5}
          ratingImage={star}
          readonly={true}
          startingValue={avg}
          type='custom'
        />
        <Text style={styles.numberOfVoters}>
          {formatNumberOfVoters(components)}
        </Text>
      </View>
      <BookRatingChart rating={rating} />
    </View>
  );
};

export default BookRating;