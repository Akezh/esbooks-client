import { IMyBook } from '@types';

interface IMyBookList {
  data: IMyBook[];
  nav: any;
}

interface IMyBookListItem {
  item: IMyBook;
  nav: any;
}

export {
  IMyBookList,
  IMyBookListItem,
};