import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { getNumberOfVoters } from '@utils';
import { BookRatingChartStyles as styles } from '../../../styles';

interface IProps {
  rating: any;
}

const BookRatingChart: FunctionComponent<IProps> = (props): JSX.Element => {
  const { rating } = props;

  const five = rating.components.filter(item => item.ratingScore === 5);
  const fiveCount = five.length ? five[0].count : 0;

  const four = rating.components.filter(item => item.ratingScore === 4);
  const fourCount = five.length ? four[0].count : 0;

  const three = rating.components.filter(item => item.ratingScore === 3);
  const threeCount = three.length ? three[0].count : 0;

  const two = rating.components.filter(item => item.ratingScore === 2);
  const twoCount = two.length ? two[0].count : 0;

  const one = rating.components.filter(item => item.ratingScore === 1);
  const oneCount = one.length ? one[0].count : 0;

  return (
    <View style={styles.ratingRightSection}>
      {renderBookRatingChartLine(rating.components, fiveCount, 5)}
      {renderBookRatingChartLine(rating.components, fourCount, 4)}
      {renderBookRatingChartLine(rating.components, threeCount, 3)}
      {renderBookRatingChartLine(rating.components, twoCount, 2)}
      {renderBookRatingChartLine(rating.components, oneCount, 1)}
    </View>
  );
};

const renderBookRatingChartLine = (
  ratingComponent: any,
  count: any = 0,
  numberComponent: number,
): JSX.Element => {
  const numberOfVoters = getNumberOfVoters(ratingComponent);
  const lineWidth = ((count / numberOfVoters) * 100).toString() + '%';

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
