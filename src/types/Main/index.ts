import { IIncompliteBook } from '@types';

interface IMainBookList {
  data: IIncompliteBook[];
  onBookDetails: (item: IIncompliteBook) => void;
}

interface IMainBookListItem {
  item: IIncompliteBook;
  onBookDetails: (item: IIncompliteBook) => void;
}

interface IMainBookCardList {
  data: Array<{
    title: string,
    books: IIncompliteBook[],
  }>;
  onBookDetails: (item: IIncompliteBook) => void;
}

interface IMainBookCardListItem {
  title: string;
  books: IIncompliteBook[];
}

export {
  IMainBookCardList,
  IMainBookCardListItem,
  IMainBookList,
  IMainBookListItem,
};