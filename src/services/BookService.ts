import { BASE_URL } from '@constants';

class BookService {
  private BOOK_PATH: string;

  constructor() {
    this.BOOK_PATH = '/api/books';
  }

  async getBookDetails(args) {
    try {
      const params = {
        method: 'GET',
        headers: {
          Authorization: args.token,
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      const URL = BASE_URL + this.BOOK_PATH + '/' + args.bookId;
      const data = await fetch(URL, params);
      
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export const Book = new BookService();
