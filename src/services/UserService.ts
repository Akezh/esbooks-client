import { BASE_URL } from '@constants';

class UserService {
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
}

export const User = new UserService();
