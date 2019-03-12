import { ICompleteBookRating } from '@types';

interface IBookRatingAndReviews {
  data: {
    rating: ICompleteBookRating,
  };
}

export { IBookRatingAndReviews };