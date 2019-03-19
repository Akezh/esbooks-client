import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Divider, TagList } from '@components';
import { THEME } from '@constants';
import { withScrollView } from '@hocs';
import { IRateBookData } from '@types';
import BookDescriptionBlock from './BookDescriptionBlock';
import BookInfoBlock from './BookInfoBlock';
import RateBookBlock from './RateBookBlock';
import BookRatingAndTopReviewsBlock from './BookRatingAndTopReviewsBlock';
import { BookDetailsViewStyles as styles } from '../styles';

interface IProps {
  incompleteData: any;
  onRateBook: (item: IRateBookData, value?: number) => void;
}

interface IState {
  myRating: number;
}

const { colors } = THEME;
const { primary } = colors;

class BookDetailsView extends Component<IProps, IState> {
  state = {
    myRating: this.props.incompleteData.rating.length && this.props.incompleteData.rating[0].my,
  };

  public setMyRating = (myRating: number): void => {
    const { incompleteData } = this.props;

    if (!myRating) {
      this.setState({
        myRating: incompleteData.rating.length && incompleteData.rating[0].my,
      });
    } else {
      this.setState({
        myRating,
      });
      if (incompleteData.rating.length) {
        incompleteData.rating[0].my = myRating;
      }
    }
    this.forceUpdate();
  }

  render() {
    const { incompleteData, onRateBook } = this.props;
    const { myRating } = this.state;

    const {
      authors,
      categories,
      description,
      id,
      imageUri,
      owner,
      published_date,
      publisher,
      rating,
      reader,
      subtitle,
      title,
      queues,
    } = incompleteData;

    return (
      <View style={styles.container}>
        <BookInfoBlock
          data={{
            authors,
            categories,
            imageUri,
            owner,
            published_date,
            publisher,
            reader,
            title,
            queues,
          }}
        />
        <Divider />

        {categories.length && 
          <React.Fragment>
            <TagList data={categories} />
            <Divider />
          </React.Fragment>}

        {subtitle && description && 
          <React.Fragment>
            <BookDescriptionBlock
              subtitle={subtitle}
              description={description}
            />
            <Divider />
          </React.Fragment>}

        <RateBookBlock
          data={{
            title,
            id,
            myRating,
            setMyRating: this.setMyRating,
          }}
          onRateBook={onRateBook}
        />
        <Divider />

       <BookRatingAndTopReviewsBlock data={{ rating: rating && rating.length ? rating[0] : [] }} />
        <StatusBar
          backgroundColor={primary}
          barStyle='light-content'
        />
      </View>
    );
  }
}

export default withScrollView(BookDetailsView);