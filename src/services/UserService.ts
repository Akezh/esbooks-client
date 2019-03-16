import { BASE_URL } from '@constants';

class UserService {
  private UPDATE_USER_PATH: string;
  private ME_PATH: string;
  private BOOK_PATH: string;


  constructor() {
    this.ME_PATH = '/api/users/me/books';
    this.BOOK_PATH = '/api/users/books';
    this.UPDATE_USER_PATH = '/api/users/me';
  }

  async signIn(args) {
    try {
      const data = await fetch(BASE_URL + '/auth/login', {
        method: 'POST',
        body: JSON.stringify(args),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return data;
    } catch (e) {
      throw e;
    }
  }
  
  async update(args) {
    try {
      const params = {
        method: 'POST',
        body: args.data,
        headers: {
          Authorization: args.token,
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      };
      
      const URL = BASE_URL + this.UPDATE_USER_PATH;
      const response = await fetch(URL, params);
      return response;
    } catch (e) {
      throw e;
    }
  }
  
  async getMyBooks(token: string) {
    try {
      const data = await fetch(BASE_URL + this.ME_PATH, {
        method: 'GET',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (e) {
      throw e;
    }
  }
    
  async addBook(args) {
    try {
      const params = {
        method: 'POST',
        body: args.book,
        headers: {
          Authorization: args.token,
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      };
      const URL = BASE_URL + this.BOOK_PATH + '/addBook';
      const data = await fetch(URL, params);

      return data;
    } catch (e) {
      throw e;
    }
  }
}

export const User = new UserService();
