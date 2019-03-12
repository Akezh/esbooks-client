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
  reader: IOwner;
  subtitle: string;
  title: string;
  updated: Date | string;
  waiting_list: IOwner[];
}

interface IOwner {
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
  ICompleteBook,
  ICompleteBookRating,
  ICompleteBookRatingComponents,
  IIncompleteBook,
  IOwner,
};