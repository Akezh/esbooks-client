import {
  BOOK_DATA_FAILURE,
  BOOK_DATA_REQUEST,
  BOOK_DATA_SUCCESS,
} from './types';

const request = () => ({
  type: BOOK_DATA_REQUEST,
});

const success = (data) => ({
  type: BOOK_DATA_SUCCESS,
  payload: {
    data,
  },
});

const failure = (error) => ({
  type: BOOK_DATA_FAILURE,
  payload: {
    error,
  },
});

export const cleanError = () => async (dispatch: any) => {
  dispatch(failure(''));
};

export const getBookData = (ISBNCode: string) => async (dispatch: any) => {
  dispatch(request());

  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBNCode}`);
    const data = await response.json();

    if (data.totalItems) {
      const d = data.items[0].volumeInfo;

      const authors = d.authors;
      const categories = d.categories;
      const date = d.publishedDate;
      const description = d.description;
      const image = d.imageLinks && d.imageLinks.thumbnail;
      const language = d.language;
      const pageCount = d.pageCount;
      const publisher = d.publisher;
      const subtitle = d.subtitle;
      const title = d.title;

      const newData = {
        authors,
        categories,
        date,
        description,
        image,
        language,
        pageCount,
        publisher,
        subtitle,
        title,
      };

      dispatch(success(newData));
    } else {
      dispatch(failure('There is no information about this book'));
    }
  } catch (e) {
    dispatch(failure(e));
  }
};
