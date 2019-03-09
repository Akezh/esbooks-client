import { PLACEHOLDERS } from '@static';

const { book, user } = PLACEHOLDERS;

const INCOMPLITE_BOOK_DATA = [
  {
    authors: ['Admin'],
    title: 'Botname',
    image: book,
    owner: {
      photo: user,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdminAdmin'],
    title: 'Botname 1 Botname 0',
    image: book,
    owner: {
      photo: user,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdminAdminAdminAdminAdmin'],
    title: 'Botname 2 Botname 1 Botname 0',
    image: book,
    owner: {
      photo: user,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdmin'],
    title: 'Botname3Botname2Botname1Botname0Botname-2Botname-3',
    image: book,
    owner: {
      photo: user,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdminAdminAdminAdminAdminAdminAdminAdminAdminAdminAdmin'],
    title: 'Botname4Botname3Botname2',
    image: book,
    owner: {
      photo: user,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdminAdmin'],
    title: 'Botname 4 Botname 3 Botname 2 Botname 1 Botname 0-',
    image: book,
    owner: {
      photo: user,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdminAdmin123456789'],
    title: 'Botname123456789*-*/123457890',
    image: book,
    owner: {
      photo: user,
      fullname: 'Some Guy',
    },
  },
];

const CARD_DATA = [
  {
    title: 'Technology',
    books: INCOMPLITE_BOOK_DATA,
  },
  {
    title: 'Computers',
    books: INCOMPLITE_BOOK_DATA,
  },
  {
    title: 'Sport',
    books: INCOMPLITE_BOOK_DATA,
  },
  {
    title: 'Education',
    books: INCOMPLITE_BOOK_DATA,
  },
  {
    title: 'Discover',
    books: INCOMPLITE_BOOK_DATA,
  },
];

export { CARD_DATA };