import { BASE_URL } from '@constants';

class SearchService {
  private SEARCH_PATH: string;

  constructor() {
    this.SEARCH_PATH = '/api/search';
  }

  async search(args) {
    try {
      const params = {
        method: 'GET',
        headers: {
          Authorization: args.token,
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      
      const URL = BASE_URL + this.SEARCH_PATH + '?query=' + args.query;
      const data = await fetch(URL, params);

      return data;
    } catch (e) {
      throw e;
    }
  }
}

export const Search = new SearchService();
