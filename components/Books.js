/* eslint-disable */

class Books {
  // Declare private field
  #library;

  constructor() {
    // Initialize fields
    this.#library = [];
    this.addBook();
    this.deleteBook();
    this.saveLibrary();
  }

  addBook = () => {};

  deleteBook = () => {};

  saveLibrary = () => {};
}

export default Books;
