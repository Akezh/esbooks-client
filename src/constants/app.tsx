import { PLACEHOLDERS } from '@static';
const TEST_BOOK_IMAGE = true;

const { book, default_user_avatar } = PLACEHOLDERS;

const COMPLETE_BOOK_DATA = [
  {
    authors: ['Admin', 'Admin2'],
    categories: ['CATEGORY 3'],
    created: '2019-03-02T18:00:00.000Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in',
    id: '1',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    published: '2019-03-02T18:00:00.000Z',
    publisher: 'PUBLISHER 3',
    rating: [
      {
        avg: 4.5,
        components: [
          {
            ratingScore: 5,
            quantity: 44,
          },
          {
            ratingScore: 4,
            quantity: 20,
          },
          {
            ratingScore: 3,
            quantity: 10,
          },
          {
            ratingScore: 2,
            quantity: 5,
          },
          {
            ratingScore: 1,
            quantity: 1,
          },
        ],
        my: 4,
      },
    ],
    reader: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'Bookname',
    updated: '2019-03-02T18:00:00.000Z',
    waiting_list: [],
  },
  {
    authors: ['AdminAdminAdmin'],
    categories: ['CATEGORY 3'],
    created: '2019-03-02T18:00:00.000Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in',
    id: '2',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    published: '2019-03-02T18:00:00.000Z',
    publisher: 'PUBLISHER 3',
    rating: [
      {
        avg: 4.5,
        components: [
          {
            ratingScore: 5,
            quantity: 44,
          },
          {
            ratingScore: 4,
            quantity: 20,
          },
          {
            ratingScore: 3,
            quantity: 10,
          },
          {
            ratingScore: 2,
            quantity: 5,
          },
          {
            ratingScore: 1,
            quantity: 1,
          },
        ],
        my: 4,
      },
    ],
    reader: {},
    subtitle: 'SUBTITLE TEST 3',
    title: 'Bookname 1 Bookname 0',
    updated: '2019-03-02T18:00:00.000Z',
    waiting_list: [],
  },
  {
    authors: ['AdminAdminAdminAdminAdminAdmin'],
    categories: ['CATEGORY 3'],
    created: '2019-03-02T18:00:00.000Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in',
    id: '3',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    published: '2019-03-02T18:00:00.000Z',
    publisher: 'PUBLISHER 3',
    rating: [
      {
        avg: 4.5,
        components: [
          {
            ratingScore: 5,
            quantity: 44,
          },
          {
            ratingScore: 4,
            quantity: 20,
          },
          {
            ratingScore: 3,
            quantity: 10,
          },
          {
            ratingScore: 2,
            quantity: 5,
          },
          {
            ratingScore: 1,
            quantity: 1,
          },
        ],
        my: 4,
      },
    ],
    reader: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    subtitle: 'SUBTITLE TEST 3',
    title: 'Bookname 2 Bookname 1 Bookname 0',
    updated: '2019-03-02T18:00:00.000Z',
    waiting_list: [
      {
        photo: default_user_avatar,
        fullname: 'Some Guy',
      },
    ],
  },
  {
    authors: ['AdminAdmin'],
    categories: ['CATEGORY 3'],
    created: '2019-03-02T18:00:00.000Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in',
    id: '4',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    published: '2019-03-02T18:00:00.000Z',
    publisher: 'PUBLISHER 3',
    rating: [
      {
        avg: 4.5,
        components: [
          {
            ratingScore: 5,
            quantity: 44,
          },
          {
            ratingScore: 4,
            quantity: 20,
          },
          {
            ratingScore: 3,
            quantity: 10,
          },
          {
            ratingScore: 2,
            quantity: 5,
          },
          {
            ratingScore: 1,
            quantity: 1,
          },
        ],
        my: 4,
      },
    ],
    reader: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    subtitle: 'SUBTITLE TEST 3',
    title: 'Bookname3Bookname2Bookname1Bookname0Bookname-2Bookname-3',
    updated: '2019-03-02T18:00:00.000Z',
    waiting_list: [
      {
        photo: default_user_avatar,
        fullname: 'Some Guy',
      },
    ],
  },
  {
    authors: ['AdminAdminAdminAdminAdminAdminAdminAdminAdminAdminAdminAdmin'],
    categories: ['CATEGORY 3'],
    created: '2019-03-02T18:00:00.000Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in',
    id: '5',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Bookname4Bookname3Bookname2',
    },
    published: '2019-03-02T18:00:00.000Z',
    publisher: 'PUBLISHER 3',
    rating: [
      {
        avg: 4.5,
        components: [
          {
            ratingScore: 5,
            quantity: 44,
          },
          {
            ratingScore: 4,
            quantity: 20,
          },
          {
            ratingScore: 3,
            quantity: 10,
          },
          {
            ratingScore: 2,
            quantity: 5,
          },
          {
            ratingScore: 1,
            quantity: 1,
          },
        ],
        my: 4,
      },
    ],
    reader: {
      photo: default_user_avatar,
      fullname: 'Bookname4Bookname3Bookname2',
    },
    subtitle: 'SUBTITLE TEST 3',
    title: 'Bookname4Bookname3Bookname2',
    updated: '2019-03-02T18:00:00.000Z',
    waiting_list: [
      {
        photo: default_user_avatar,
        fullname: 'Bookname4Bookname3Bookname2',
      },
    ],
  },
  {
    authors: ['AdminAdminAdmin'],
    categories: ['CATEGORY 3'],
    created: '2019-03-02T18:00:00.000Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in',
    id: '6',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    published: '2019-03-02T18:00:00.000Z',
    publisher: 'PUBLISHER 3',
    rating: [
      {
        avg: 4.5,
        components: [
          {
            ratingScore: 5,
            quantity: 44,
          },
          {
            ratingScore: 4,
            quantity: 20,
          },
          {
            ratingScore: 3,
            quantity: 10,
          },
          {
            ratingScore: 2,
            quantity: 5,
          },
          {
            ratingScore: 1,
            quantity: 1,
          },
        ],
        my: 4,
      },
    ],
    reader: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    subtitle: 'SUBTITLE TEST 3',
    title: 'Bookname 4 Bookname 3 Bookname 2 Bookname 1 Bookname 0-',
    updated: '2019-03-02T18:00:00.000Z',
    waiting_list: [
      {
        photo: default_user_avatar,
        fullname: 'Some Guy',
      },
    ],
  },
  {
    authors: ['AdminAdminAdmin123456789'],
    categories: ['CATEGORY 3'],
    created: '2019-03-02T18:00:00.000Z',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in',
    id: '7',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    published: '2019-03-02T18:00:00.000Z',
    publisher: 'PUBLISHER 3',
    rating: [
      {
        avg: 4.5,
        components: [
          {
            ratingScore: 5,
            quantity: 44,
          },
          {
            ratingScore: 4,
            quantity: 20,
          },
          {
            ratingScore: 3,
            quantity: 10,
          },
          {
            ratingScore: 2,
            quantity: 5,
          },
          {
            ratingScore: 1,
            quantity: 1,
          },
        ],
        my: 4,
      },
    ],
    reader: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
    subtitle: 'SUBTITLE TEST 3',
    title: 'Bookname123456789*-*/123457890',
    updated: '2019-03-02T18:00:00.000Z',
    waiting_list: [
      {
        photo: default_user_avatar,
        fullname: 'Some Guy',
      },
    ],
  },
];

const INCOMPLETE_BOOK_DATA = [
  {
    authors: ['Admin'],
    title: 'Bookname',
    id: '1',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdminAdmin'],
    title: 'Bookname 1 Bookname 0',
    id: '2',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdminAdminAdminAdminAdmin'],
    title: 'Bookname 2 Bookname 1 Bookname 0',
    id: '3',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdmin'],
    title: 'Bookname3Bookname2Bookname1Bookname0Bookname-2Bookname-3',
    id: '4',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdminAdminAdminAdminAdminAdminAdminAdminAdminAdminAdmin'],
    title: 'Bookname4Bookname3Bookname2',
    id: '5',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Bookname4Bookname3Bookname2',
    },
  },
  {
    authors: ['AdminAdminAdmin'],
    title: 'Bookname 4 Bookname 3 Bookname 2 Bookname 1 Bookname 0-',
    id: '6',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
  },
  {
    authors: ['AdminAdminAdmin123456789'],
    title: 'Bookname123456789*-*/123457890',
    id: '7',
    image: book,
    owner: {
      photo: default_user_avatar,
      fullname: 'Some Guy',
    },
  },
];

const CARD_DATA = [
  {
    title: 'Technology',
    books: INCOMPLETE_BOOK_DATA,
  },
  {
    title: 'Computers',
    books: INCOMPLETE_BOOK_DATA,
  },
  {
    title: 'Sport',
    books: INCOMPLETE_BOOK_DATA,
  },
  {
    title: 'Education',
    books: INCOMPLETE_BOOK_DATA,
  },
  {
    title: 'Discover',
    books: INCOMPLETE_BOOK_DATA,
  },
];

const PROVIDER = {
  Facebook: 'facebook',
  Google: 'google',
  Vkontakte: 'vkontakte',
};

export {
  CARD_DATA,
  COMPLETE_BOOK_DATA,
  TEST_BOOK_IMAGE,
  PROVIDER,
};