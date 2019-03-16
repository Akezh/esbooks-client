import { BASE_URL } from '@constants';

class UserService {
  private ME_PATH: string;

  constructor() {
    this.ME_PATH = '/api/users/me/books';
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
  async getMyBooks(args) {
    try {
      const data = await fetch(BASE_URL + this.ME_PATH, {
        method: 'GET',
        headers: {
          Authorization: args.token,
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (e) {
      throw e;

    }
  }
}

export const User = new UserService();
