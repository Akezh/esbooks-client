import { IIncompliteBook } from '@types';

interface IHomeBookList {
  data: IIncompliteBook[];
  onBookDetails: (item: IIncompliteBook) => void;
}

interface IHomeBookListItem {
  item: IIncompliteBook;
  onBookDetails: (item: IIncompliteBook) => void;
}

interface IHomeBookCardList {
  data: Array<{
    title: string,
    books: IIncompliteBook[],
  }>;
  onBookDetails: (item: IIncompliteBook) => void;
}

interface IHomeBookCardListItem {
  title: string;
  books: IIncompliteBook[];
}

export {
  IHomeBookCardList,
  IHomeBookCardListItem,
  IHomeBookList,
  IHomeBookListItem,
};