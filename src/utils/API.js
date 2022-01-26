import FetchWrapper from './FetchBook';

class BooksAPI {
  static #API = new FetchWrapper('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/');

  static #APP_ID = 'mDm4dEiEhEvX6B1jDkZT';

  static async getAllBooks() {
    const response = await this.#API.get(`apps/${this.#APP_ID}/books`);
    return response;
  }

  static async postBook(data) {
    const response = await this.#API.post(`apps/${this.#APP_ID}/books`, data);
    return response;
  }

  static async deleteBook(id) {
    const response = await this.#API.delete(`apps/${this.#APP_ID}/books/${id}`);
    return response;
  }
}

export default BooksAPI;
