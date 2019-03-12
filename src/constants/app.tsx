import { PLACEHOLDERS } from '@static';

const TEST_BOOK_IMAGE = true;


const CATEGORIES = [
  "Children's Books",
  'Arts & Photography',
  'Biographies & Memoirs',
  'Business & Money',
  'Calendars',
  'Christian Books & Bibles',
  'Comics & Graphic Novels',
  'Computers & Technology',
  'Cookbooks, Food & Wine',
  'Crafts, Hobbies & Home',
  'Education & Teaching',
  'Engineering & Transportation',
  'Health, Fitness & Dieting',
  'History',
  'Humor & Entertainment',
  'Law',
  'Lesbian, Gay, Bisexual & Transgender Books',
  'Literature & Fiction',
  'Medical Books',
  'Mystery, Thriller & Suspense',
  'Parenting & Relationships',
  'Politics & Social Sciences',
  'Reference',
  'Religion & Spirituality',
  'Romance',
  'Science & Math',
  'Science Fiction & Fantasy',
  'Self-Help',
  'Sports & Outdoors',
  'Teen & Young Adult',
  'Test Preparation',
  'Travel',
];

const TAGS = [
  "Children's & Teens",
  "Children's & Youth Sports",
  "Children's Cookbooks",
  "Children's Health",
  "Children's",
  "Driver's Education",
  "Men's Health",
  "Women's Fiction",
  "Women's Health",
  "Women's Studies",
  'Abuse',
  'Accounting',
  'Action & Adventure Manga',
  'Action & Adventure',
  'Activities, Crafts & Games',
  'Addiction & Recovery',
  'Administration & Medicine Economics',
  'Administrative Law',
  'Adoption',
  'Adventure Travel',
  'Africa',
  'African American',
  'Aging Parents',
  'Aging',
  'Agnosticism',
  'Agricultural Sciences',
  'Allied Health Professions',
  'Almanacs & Yearbooks',
  'Alternative Medicine',
  'Americas',
  'Ancient & Medieval Literature',
  'Ancient Civilizations',
  'Anger Management',
  'Animals',
  'Anthologies',
  'Anthropology',
  'Antiques & Collectibles',
  'Anxieties & Phobias',
  'Archaeology',
  'Architecture',
  'Arctic & Antarctica',
  'Art Therapy & Relaxation',
  'Art of Comics and Manga',
  'Art, Music & Photography',
  'Arts & Literature',
  'Arts',
  'Arts, Music & Photography',
  'Asia',
  'Asian Cooking',
  'Astronomy & Space Science',
  'Atheism',
  'Atlases & Maps',
  'Australia & Oceania',
  'Australia & South Pacific',
  'Automotive',
  'Babysitting, Day Care & Child Care',
  'Baking',
  'Baseball',
  'Basic Sciences',
  'Basketball',
  'Beauty, Grooming, & Style',
  'Behavioral Sciences',
  'Beverages & Wine',
  'Bible Covers',
  'Bible Study & Reference',
  'Bibles',
  'Billionaires',
  'Biographies & History Graphic Novels',
  'Biographies',
  'Biography & History',
  'Biological Sciences',
  'Boats & Ships',
  'British & Irish',
  'Buddhism',
  'Business Culture',
  'Business Technology',
  'Business of Art',
  'Business',
  'Canada',
  'Canning & Preserving',
  'Careers',
  'Caribbean',
  'Cars, Trains & Things That Go',
  'Catalogs & Directories',
  'Catholicism',
  'Celebrities & TV Shows',
  'Central America',
  'Certification',
  'Chemistry',
  'Christian Denominations & Sects',
  'Christian Living',
  'Churches & Church Leadership',
  'Citizenship',
  'Classics',
  'Clean & Wholesome',
  'Coaching',
  'Collections, Catalogs & Exhibitions',
  'College & High School',
  'Coloring Books for Grown-Ups',
  'Comfort Food',
  'Comic Books',
  'Comic Strips',
  'Communication & Social Skills',
  'Computer Science',
  'Constitutional Law',
  'Consumer Guides',
  'Contemporary',
  'Cooking Education & Reference',
  'Cooking Methods',
  'Cooking by Ingredient',
  'Cooking',
  'Crafts & Hobbies',
  'Crafts',
  'Creativity',
  'Criminal Law',
  'Databases & Big Data',
  'Death & Grief',
  'Decorative Arts & Design',
  'Dentistry',
  'Desserts',
  'Dictionaries & Terminology',
  'Dictionaries & Thesauruses',
  'Diet & Health',
  'Diets & Weight Loss',
  'Digital Audio, Video & Photography',
  'Diseases & Physical Ailments',
  'Dramas & Plays',
  'Drawing',
  'Dreams',
  'Early Learning',
  'Earth Sciences',
  'Eating Disorders',
  'Economics',
  'Education & Reference',
  'Education',
  'Emotions',
  'Encyclopedias & Subject Guides',
  'Engineering',
  'English as a Second Language',
  'Entertaining & Holidays',
  'Environment',
  'Environmental & Natural Resources Law',
  'Erotica',
  'Essays & Commentary',
  'Essays & Correspondence',
  'Estate Planning',
  'Ethics & Professional Responsibility',
  'Ethnic & National',
  'Etiquette',
  'Europe',
  'Event Planning',
  'Evolution',
  'Exercise & Fitness',
  'Experiments, Instruments & Measurement',
  'Extreme Sports',
  'Fairy Tales, Folk Tales & Myths',
  'Family Activities',
  'Family Health',
  'Family Law',
  'Family Relationships',
  'Fantasy Graphic Novels',
  'Fantasy',
  'Fashion',
  'Fertility',
  'Field Guides',
  'Finance',
  'Flowers',
  'Food, Lodging & Transportation',
  'Football (American)',
  'Foreign & International Law',
  'Foreign Language Study & Reference',
  'Foreign Language',
  'Games & Strategy Guides',
  'Games',
  'Gaming',
  'Garden & Home',
  'Gardening & Landscape Design',
  'Genealogy',
  'Genre Fiction',
  'Geography & Cultures',
  'Golf',
  'Gothic',
  'Graduate School',
  'Graphic Design',
  'Graphic Novels',
  'Graphics & Design',
  'Growing Up & Facts of Life',
  'Handwriting Analysis',
  'Happiness',
  'Hardware & DIY',
  'Health & Medical Law',
  'Higher & Continuing Education',
  'Hiking & Camping',
  'Hinduism',
  'Historical Fiction',
  'Historical Study & Educational Resources',
  'Historical',
  'History & Criticism',
  'History & Culture',
  'History & Philosophy',
  'History & Price Guides',
  'Hobbies & Games',
  'Hockey',
  'Holidays & Celebrations',
  'Holidays',
  'Home Improvement & Design',
  'How To Create Comics & Manga',
  'Human Resources',
  'Humor & Comics',
  'Humor & Satire',
  'Humor',
  'Hunting & Fishing',
  'Hypnosis',
  'Individual Artists',
  'Individual Sports',
  'Industries',
  'Inner Child',
  'Inspirational',
  'Insurance',
  'Intellectual Property',
  'International',
  'Internet & Social Media',
  'Investing',
  'Islam',
  'Italian Cooking',
  'Job Hunting & Careers',
  'Journal Writing',
  'Judaism',
  'Kitchen Appliances',
  'LGBT',
  'Law Practice',
  'Leaders & Notable People',
  'Legal Education',
  'Legal History',
  'Legal Self-Help',
  'Legal Theory & Systems',
  'Lighthouses',
  'Literary',
  'Main Courses & Side Dishes',
  'Management & Leadership',
  'Manga',
  'Maps',
  'Marketing & Sales',
  'Marriage & Adult Relationships',
  'Mathematics',
  'Media & the Law',
  'Media Tie-In Graphic Novels',
  'Medical Informatics',
  'Medical',
  'Medicine',
  'Memoirs',
  'Memory Improvement',
  'Mental Health',
  'Mexico',
  'Mid-Life',
  'Middle East',
  'Military',
  'Ministry & Evangelism',
  'Miscellaneous',
  'Mobile Phones, Tablets & E-Readers',
  'Motivational',
  'Mountaineering',
  'Movies',
  'Multicultural',
  'Music',
  'Mysteries & Detectives',
  'Mysteries & Thrillers',
  'Mystery',
  'Mythology & Folk Tales',
  'Nature & Ecology',
  'Nature Travel',
  'Nature',
  'Needlecrafts & Textile Crafts',
  'Networking & Cloud Computing',
  'Neuro-Linguistic Programming',
  'New Adult & College',
  'New Age & Spirituality',
  'New Age',
  'Nursing',
  'Nutrition',
  'Occult & Paranormal',
  'Operating Systems',
  'Other Eastern Religions & Sacred Texts',
  'Other Media',
  'Other Religions, Practices & Sacred Texts',
  'Other Team Sports',
  'Outdoor Cooking',
  'Outdoor Recreation',
  'Painting',
  'Paranormal',
  'Parenting',
  'Performing Arts',
  'Personal Finance',
  'Personal Health',
  'Personal Transformation',
  'Pets & Animal Care',
  'Pharmacology',
  'Philosophy',
  'Photography & Video',
  'Photography',
  'Physics',
  'Pictorial',
  'Poetry',
  'Polar Regions',
  'Politics & Government',
  'Pop Culture',
  'Pregnancy & Childbirth',
  'Processes & Infrastructure',
  'Professional Cooking',
  'Professional',
  'Professionals & Academics',
  'Programming Languages',
  'Programming',
  'Protestantism',
  'Psychology & Counseling',
  'Psychology',
  'Publishers',
  'Puzzles & Games',
  'Quick & Easy',
  'Quotations',
  'Racket Sports',
  'Radio',
  'Real Estate',
  'Reference & Collections',
  'Regency',
  'Regional & International',
  'Regional Canada',
  'Regional U.S.',
  'Relationships',
  'Religions',
  'Religious Art',
  'Religious Studies',
  'Religious',
  'Research',
  'Rodeos',
  'Romance Manga',
  'Romantic Comedy',
  'Romantic Suspense',
  'Rules & Procedures',
  'Russia',
  'Safety & First Aid',
  'Schools & Teaching',
  'Science Fiction Graphic Novels',
  'Science Fiction',
  'Science for Kids',
  'Science, Nature & How It Works',
  'Sculpture',
  'Security & Encryption',
  'Self-Esteem',
  'Sex',
  'Sexual Health',
  'Sheet Music & Scores',
  'Short Stories & Anthologies',
  'Skills',
  'Small Business & Entrepreneurship',
  'Soccer',
  'Social Issues',
  'Social Sciences',
  'Sociology',
  'Softball',
  'Software',
  'South America',
  'Special Diet',
  'Special Needs',
  'Specialties',
  'Specialty Travel',
  'Specific Groups',
  'Spiritual',
  'Sports Health & Safety',
  'Sports',
  'Stress Management',
  'Study & Teaching',
  'Study & Test-Taking Skills',
  'Study Guides & Workbooks',
  'Studying & Workbooks',
  'Success',
  'Superheroes',
  'Survival & Emergency Preparedness',
  'Survival Skills',
  'Survival',
  'Sustainable Living',
  'TOEFL & TOEIC',
  'Tax Law',
  'Taxation',
  'Technology',
  'Teen Health',
  'Television',
  'Test Flash Cards',
  'Theology',
  'Thrillers & Suspense',
  'Time Managemen',
  'Time Travel',
  'Training',
  'Transportation',
  'Travel & Scenery',
  'Travel Writing',
  'Travelers & Explorers',
  'Trivia & Fun Facts',
  'True Crime',
  'U.S. Cooking',
  'United States',
  'Vaccinations',
  'Vampires',
  'Vegetarian & Vegan',
  'Vehicle Pictorials',
  'Veterinary Medicine',
  'Water Sports',
  'Web Development & Design',
  'Weddings',
  'Werewolves & Shifters',
  'Western',
  'Winter Sports',
  'Women & Business',
  'Words, Language & Grammar',
  'World Literature',
  'World',
  'Worship & Devotion',
  'Writing',
  'Writing, Research & Publishing Guides',
];

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
  CATEGORIES,
  TAGS,
  COMPLETE_BOOK_DATA,
  TEST_BOOK_IMAGE,
  PROVIDER,
};