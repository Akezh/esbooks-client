import { IIncompleteBook } from '@types';

interface IHomeBookList {
  data: IIncompleteBook[];
  onBookDetails: (item: IIncompleteBook) => void;
}

interface IHomeBookListItem {
  item: IIncompleteBook;
  onBookDetails: (item: IIncompleteBook) => void;
}

interface IHomeBookCardList {
  data: Array<{
    title: string,
    books: IIncompleteBook[],
  }>;
  onBookDetails: (item: IIncompleteBook) => void;
}

interface IHomeBookCardListItem {
  title: string;
  books: IIncompleteBook[];
}

export {
  IHomeBookCardList,
  IHomeBookCardListItem,
  IHomeBookList,
  IHomeBookListItem,
};