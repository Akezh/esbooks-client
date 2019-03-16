interface IIncompleteBook {
  authors: string[];
  id: string;
  imageUri: string;
  owner: IOwner;
  title: string;
  rating: {
    avg: number,
  };
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
  publishedDate: any;
  id: string;
  imageUri: any;
  owner: IOwner;
  publisher?: string;
  readAt: any;
  title: string;
}

interface IOwner {
  fullName?: string;
  avatar?: any;
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