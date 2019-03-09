import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Divider, TagList } from '@components';
import { COMPLITE_BOOK_DATA } from '@constants';
import { withScrollView } from '@hocs';
import { ICompliteBook, IIncompliteBook, IRateBookData } from '@types';
import BookDescriptionBlock from './BookDescriptionBlock';
import BookInfoBlock from './BookInfoBlock';
import RateBookBlock from './RateBookBlock';
import BookRatingAndTopReviewsBlock from './BookRatingAndTopReviewsBlock';
import { BookDetailsViewStyles as styles } from '../styles';

interface IProps {
  incompliteData: IIncompliteBook;
  onRateBook: (item: IRateBookData, value?: number) => void;
}

interface IState {
  myRating: number;
}

let DATA: ICompliteBook;

const setData = (incompliteData: IIncompliteBook) => {
  DATA = COMPLITE_BOOK_DATA.filter(item => item.id === incompliteData.id)[0];
};

class BookDetailsView extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { incompliteData } = this.props;
    setData(incompliteData);

    this.state = {
      myRating: DATA.rating[0].my,
    };
  }

  public setMyRating = (myRating: number) => {
    if (!myRating) {
      this.setState({
        myRating: DATA.rating[0].my,
      });
    } else {
      this.setState({
        myRating,
      });
      DATA.rating[0].my = myRating;
    }
    this.forceUpdate();
  }

  render() {
    const { onRateBook } = this.props;
    const { myRating } = this.state;
    const {
      authors,
      categories,
      description,
      id,
      image,
      owner,
      published,
      publisher,
      rating,
      reader,
      subtitle,
      title,
      waiting_list,
    } = DATA;

    return (
      <View style={styles.container}>
        <BookInfoBlock
          data={{
            authors,
            categories,
            image,
            owner,
            published,
            publisher,
            reader,
            title,
            waiting_list,
          }}
        />
        <Divider />

        <TagList data={categories} />
        <Divider />

        <BookDescriptionBlock
          subtitle={subtitle}
          description={description}
        />
        <Divider />

        <RateBookBlock
          data={{
            title,
            id,
            image,
            myRating,
            setMyRating: this.setMyRating,
          }}
          onRateBook={onRateBook}
        />
        <Divider />

        <BookRatingAndTopReviewsBlock data={{ rating: rating[0] }} />
        <StatusBar
          backgroundColor='#0088CC'
          barStyle='light-content'
        />
      </View>
    );
  }
}

export default withScrollView(BookDetailsView);