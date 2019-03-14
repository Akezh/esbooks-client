import { IReader } from '@types';

interface ITheQueueForTheBookList {
  data: IReader[];
  nav: any;
  reader: IReader;
}

interface ITheQueueForTheBookListItem {
  index: number;
  item: IReader;
  nav: any;
  reader: IReader;
}

export {
  ITheQueueForTheBookList,
  ITheQueueForTheBookListItem,
};