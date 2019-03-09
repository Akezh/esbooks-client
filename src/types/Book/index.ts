interface IIncompliteBook {
  authors: string[];
  title: string;
  image: any;
  owner: {
    fullname: string,
    photo: any,
  };
}

interface ICompliteBook {
  authors: string[];
  categories: string[];
  created: Date;
  description: string;
  id: string;
  image: any;
  published: Date;
  publisher: 'PUBLISHER 3';
  rating: ICompliteBookRating;
  subtitle: string;
  title: string;
  updated: Date;
  waiting_list: any;
}

interface ICompliteBookRating {
  avg: number;
  components: ICompliteBookRatingComponents;
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
};