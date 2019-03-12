import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { ICompleteBookRating, ICompleteBookRatingComponents } from '@types';
import { getNumberOfVoters } from '@utils';
import { BookRatingChartStyles as styles } from '../../../styles';

interface IProps {
  rating: ICompleteBookRating;
}

const BookRatingChart: FunctionComponent<IProps> = (props): JSX.Element => {
  const { rating } = props;

  return (
    <View style={styles.ratingRightSection}>
      {renderBookRatingChartLine(rating.components, 5)}
      {renderBookRatingChartLine(rating.components, 4)}
      {renderBookRatingChartLine(rating.components, 3)}
      {renderBookRatingChartLine(rating.components, 2)}
      {renderBookRatingChartLine(rating.components, 1)}
    </View>
  );
};

const renderBookRatingChartLine = (ratingComponent: ICompleteBookRatingComponents[], numberComponent: number): JSX.Element => {
  const numberOfVoters = getNumberOfVoters(ratingComponent);
  const lineWidth = ((ratingComponent[5 - numberComponent].quantity / numberOfVoters) * 100).toString() + '%';

  return (
    <View style={styles.ratingChartLineContainer}>
      <Text style={styles.ratingChartText}>{numberComponent}</Text>
      <View style={styles.ratingChartLinePlaceholder}>
        <View style={[styles.ratingChartLine, { width: lineWidth }]} />
      </View>
    </View>
  );
};

export default BookRatingChart;