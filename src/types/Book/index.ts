interface IIncompleteBook {
  authors: string[];
  id: string;
  image: any;
  owner: IOwner;
  title: string;
}

interface ICompleteBook {
  authors: string[];
  categories: string[];
  created: Date | string;
  description: string;
  id: string;
  image: null | any;
  owner: IOwner;
  published: Date | string;
  publisher: string;
  reader: IReader;
  rating: ICompleteBookRating[];
  subtitle: string;
  title: string;
  updated: Date | string;
  waiting_list: IOwner[];
}

interface IMyBook {
  authors: string[];
  date: any;
  id: string;
  image: any;
  publisher: string;
  reader: IReader;
  title: string;
  waiting_list: IReader[];
}

interface IOwner {
  fullname?: string;
  photo?: any;
}

interface IReader {
  date?: any;
  fullname?: string;
  photo?: any;
}

interface ICompleteBookRating {
  avg: number;
  components: ICompleteBookRatingComponents[];
  my: number;
}

interface ICompleteBookRatingComponents {
  ratingScore: number;
  quantity: number;
}

export {
  IMyBook,
  ICompleteBook,
  ICompleteBookRating,
  ICompleteBookRatingComponents,
  IIncompleteBook,
  IOwner,
  IReader,
};