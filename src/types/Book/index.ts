interface IIncompliteBook {
  authors: string[];
  id: string;
  image: any;
  owner: IOwner;
  title: string;
}

interface ICompliteBook {
  authors: string[];
  categories: string[];
  created: Date | string;
  description: string;
  id: string;
  image: null | any;
  owner: IOwner;
  published: Date | string;
  publisher: string;
  rating: ICompliteBookRating[];
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

interface ICompliteBookRating {
  avg: number;
  components: ICompliteBookRatingComponents[];
  my: number;
}

interface ICompliteBookRatingComponents {
  ratingScore: number;
  quantity: number;
}

export {
  ICompliteBook,
  ICompliteBookRating,
  ICompliteBookRatingComponents,
  IIncompliteBook,
  IOwner,
};