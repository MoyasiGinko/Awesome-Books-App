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

  addBook = () => {
    const form = document.querySelector("#form-container");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.querySelector("#title");
      const author = document.querySelector("#author");

      if (title.value.trim() === "" || author.value.trim() === "") {
        alert("Please enter a title and author");
        return;
      }

      const book = {
        title: title.value,
        author: author.value,
      };

      this.#library.push(book);
      title.value = "";
      author.value = "";

      this.render();
    });
  };

  deleteBook = () => {
    const libraryContainer = document.getElementById("library-container");

    libraryContainer.addEventListener("click", (event) => {
      if (event.target.id === "remove-book") {
        const bookIndex = event.target.dataset.index;
        this.#library.splice(bookIndex, 1);

        this.render();
      }
    });
  };

  saveLibrary = () => {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("library", JSON.stringify(this.#library));
    });
  };
}

export default Books;
