/* eslint-disable */

class Books {
  // Declare private field
  #library;
  #root;

constructor() {
  this.#root = document.querySelector("#main");
  this.#library = JSON.parse(localStorage.getItem("library")) || [];
  this.createForm();
  this.addBook();
  this.deleteBook();
  this.render();
  this.saveLibrary();
}


  createForm = () => {
    this.#root.innerHTML = `
    <form id="form-container">
        <div class="form-items">
            <label for="title">Title</label>
            <input type="text" id="title" class="form-control" placeholder="Title">
        </div>
        <div class="form-items">
            <label for="author">Author</label>
            <input type="text" id="author" class="form-control" placeholder="Author">
        </div>
        <button type="submit" id="add-book">Add</button>
    </form>
    <div id="library-container"></div>
`;
  };

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
      if (event.target.classList.contains("remove-book")) {
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

  render = () => {
    const libraryContainer = document.getElementById("library-container");
    const border = document.getElementById("list-container");
    border.style.display = 'none';
    libraryContainer.innerHTML = "";

    this.#library.forEach((book, index) => {
      const bookContainer = document.createElement("div");
      bookContainer.classList.add("book");
      bookContainer.innerHTML = `
        <ul class="book-items">
          <li class="book-title">"${book.title}" by ${book.author}</li>
          <button type="button" class="remove-book" data-index="${index}">Remove</button>
        </ul>
      `;
      
      if (this.#library.length !== 0) {
        border.style.display = 'block';
      }
      libraryContainer.appendChild(bookContainer);
    });
  };
}

export default Books;
