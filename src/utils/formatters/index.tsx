import { TEST_BOOK_IMAGE } from '@constants';
import { PLACEHOLDERS } from '@static';
import { ICompleteBookRatingComponents } from '@types';

const { book } = PLACEHOLDERS;

const formatAuthors = (authors: string[]): string => {
  let result: string = '';
  for (let i = 0; i < authors.length; i++) {
    if (i === (authors.length - 1)) {
      result += authors[i];
    } else {
      result += (authors[i] + ', ');
    }
  }

  return result;
};

const formatNumberOfVoters = (ratingComponents: ICompleteBookRatingComponents[]): string => {
  const numberOfVoters = getNumberOfVoters(ratingComponents).toString();
  const numberOfVotersLength = numberOfVoters.length;

  let formattedNumberOfVoters = '';
  let loop = 1;
  for (let i = numberOfVotersLength - 1; i >= 0; i--) {
    if (i === (numberOfVotersLength - 3 * loop) && numberOfVoters[i - 1]) {
      formattedNumberOfVoters = ',' + numberOfVoters[i] + formattedNumberOfVoters;
      loop++;
    } else {
      formattedNumberOfVoters = numberOfVoters[i] + formattedNumberOfVoters;
    }
  }

  return formattedNumberOfVoters;
};

const getNumberOfVoters = (ratingComponents: ICompleteBookRatingComponents[]): number => {
  return ratingComponents[0].quantity
    + ratingComponents[1].quantity
    + ratingComponents[2].quantity
    + ratingComponents[3].quantity
    + ratingComponents[4].quantity;
};

const getBotImage = (image: any): any => {
  return image && !TEST_BOOK_IMAGE
    ? { uri: image }
    : book;
};

export {
  formatAuthors,
  formatNumberOfVoters,
  getBotImage,
  getNumberOfVoters,
};