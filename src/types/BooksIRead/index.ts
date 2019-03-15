import { IBookIRead } from '@types';

interface IBookIReadList {
  data: IBookIRead[];
  nav: any;
}

interface IBookIReadListItem {
  item: IBookIRead;
  nav: any;
}

export { IBookIReadList, IBookIReadListItem };
