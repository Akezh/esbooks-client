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
  rating: ICompleteBookRating[];
  reader: IReader;
  subtitle: string;
  title: string;
  updated: Date | string;
  waiting_list: IOwner[];
}

interface IMyBook {
  authors: string[];
  publishDate: any;
  id: string;
  imageUri: any;
  publisher: string;
  reader: IReader;
  title: string;
  queues: IReader[];
}

interface IBookIRead {
  authors: string[];
  date: any;
  id: string;
  image: any;
  owner: IOwner;
  publisher?: string;
  startDateOfReading: any;
  title: string;
}

interface IOwner {
  fullname?: string;
  photo?: any;
}

interface IReader {
  date?: any;
  fullName?: string;
  avatar?: any;
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
  IBookIRead,
  ICompleteBook,
  ICompleteBookRating,
  ICompleteBookRatingComponents,
  IIncompleteBook,
  IMyBook,
  IOwner,
  IReader,
};