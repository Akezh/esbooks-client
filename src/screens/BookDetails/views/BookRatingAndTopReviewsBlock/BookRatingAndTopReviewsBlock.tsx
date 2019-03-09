import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { IBookRatingAndReviews } from '@types';
import BookRating from './BookRating';
import { BookRatingAndReviewsBlockStyles as styles } from '../../styles';

const BookRatingAndTopReviewsBlock:
  FunctionComponent<IBookRatingAndReviews> = (props): JSX.Element => {
    const { data } = props;
    const { rating } = data;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ratings and reviews</Text>
        <BookRating rating={rating} />
      </View >
    );
  };

export default BookRatingAndTopReviewsBlock;