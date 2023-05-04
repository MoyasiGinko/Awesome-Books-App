/* eslint-disable */

class Books {
  // Declare private field
  #library;
  #root;
  #list;
  #addBook;
  #contact;
  #listContainer;
  #addContainer;
  #contactContainer;

constructor() {
  this.#root = document.querySelector("#main");
  this.#library = JSON.parse(localStorage.getItem("library")) || [];
  this.#list = document.querySelectorAll("#nav-links li")[0];
  this.#addBook = document.querySelectorAll("#nav-links li")[1];
  this.#contact = document.querySelectorAll("#nav-links li")[2];
  this.#listContainer = document.getElementById("list-container");
  this.#addContainer = document.getElementById("main");
  this.#contactContainer = document.getElementById("contact");
  this.createForm();
  this.addBook();
  this.deleteBook();
  this.render();
  this.saveLibrary();
  this.hideNavLinks();
  this.addNav();
  this.listNav()
  this.contactNav();
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
      this.#listContainer.style.display = "none";
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

  // SPA METHODS

  hideNavLinks = () => {
    this.#addContainer.style.display = "none";
    this.#contactContainer.style.display = "none";
  };

  addNav = () => {
    this.#addBook.addEventListener('click', () => {
      this.#listContainer.style.display = "none";
      this.#addContainer.style.display = "flex";
      this.#contactContainer.style.display = "none";
      const update = document.querySelector('#header h2');
      update.textContent = 'Add a new book';
    })
  };

  listNav = () => {
    this.#list.addEventListener('click', () => {
      this.#listContainer.style.display = "flex";
      this.#addContainer.style.display = "none";
      this.#contactContainer.style.display = "none";
      const update = document.querySelector('#header h2');
      update.textContent = 'All awesome books';
    })
  };

  contactNav = () => {
    this.#contact.addEventListener('click', () => {
      this.#listContainer.style.display = "none";
      this.#addContainer.style.display = "none";
      this.#contactContainer.style.display = "flex";
      const update = document.querySelector('#header h2');
      update.textContent = 'Contact information';
    })

    this.#contactContainer.innerHTML = `
            <p>Do have any questions or you just want to say "Hello"? <br> You can reach out to us!</p>
            <ul>
                <li>Our e-mail: mail@mail.com</li>
                <li>Our phone number: 004358653442</li>
                <li>Our address: Streetname 22, 84503 City, Country</li>
            </ul>
    `
  };
}

export default Books;
