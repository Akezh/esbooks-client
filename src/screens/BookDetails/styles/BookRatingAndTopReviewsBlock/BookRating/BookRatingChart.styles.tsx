import { StyleSheet } from 'react-native';
import { THEME } from '@constants';

const { colors, fonts } = THEME;
const { primary } = colors;
const { regular } = fonts;

const styles = StyleSheet.create({
  ratingRightSection: {
    flex: 1,
  },
  ratingChartLineContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 1,
    paddingRight: 8,
  },
  ratingChartText: {
    color: 'black',
    fontFamily: regular,
    fontSize: 12,
    marginRight: 12,
  },
  ratingChartLinePlaceholder: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 6,
    flex: 1,
    height: 10,
    width: '100%',
  },
  ratingChartLine: {
    backgroundColor: primary,
    borderRadius: 6,
    height: 10,
  },
});

export { styles };