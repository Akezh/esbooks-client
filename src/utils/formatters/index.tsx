import { PLACEHOLDERS } from '@static';
import { ICompleteBookRatingComponents } from '@types';

const { book, default_user_avatar } = PLACEHOLDERS;

const formatAuthors = (authors: string[]): string => {
  let result: string = '';
  for (let i = 0; i < authors.length; i++) {
    if (i === authors.length - 1) {
      result += authors[i];
    } else {
      result += authors[i] + ', ';
    }
  }

  return result;
};

const formatNumberOfVoters = (
  ratingComponents: ICompleteBookRatingComponents[],
): string => {
  const numberOfVoters = getNumberOfVoters(ratingComponents).toString();
  const numberOfVotersLength = numberOfVoters.length;

  let formattedNumberOfVoters = '';
  let loop = 1;
  for (let i = numberOfVotersLength - 1; i >= 0; i--) {
    if (i === numberOfVotersLength - 3 * loop && numberOfVoters[i - 1]) {
      formattedNumberOfVoters =
        ',' + numberOfVoters[i] + formattedNumberOfVoters;
      loop++;
    } else {
      formattedNumberOfVoters = numberOfVoters[i] + formattedNumberOfVoters;
    }
  }

  return formattedNumberOfVoters;
};

const getNumberOfVoters = (
  ratingComponents: ICompleteBookRatingComponents[],
): number => {
  return (
    ratingComponents[0].quantity +
    ratingComponents[1].quantity +
    ratingComponents[2].quantity +
    ratingComponents[3].quantity +
    ratingComponents[4].quantity
  );
};

const getImage = (image: any, type: 'book' | 'user'): any => {
  const urlReg = /(https?:\/\/[^\s]+)/g;
  const isImageUrl = urlReg.test(image);

  return isImageUrl
    ? { uri: image }
    : type === 'book'
    ? book
    : default_user_avatar;
};

export { formatAuthors, formatNumberOfVoters, getImage, getNumberOfVoters };
