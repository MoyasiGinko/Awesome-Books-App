const root = document.querySelector('#main');

root.innerHTML = `
    <form id="form-container">
        <div class="form-items">
            <label for="title">Title</label>
            <input type="text" id="title" class="form-control">
        </div>
        <div class="form-items">
            <label for="author">Author</label>
            <input type="text" id="author" class="form-control">
        </div>
        <button type="submit" id="add-book">SUBMIT</button>
    </form>
    <div id="library-container"></div>
`;

let library = [];

const manageBooks = () => {
  const form = document.querySelector('form');
  const { title, author } = form.elements;

  const renderLibrary = () => {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = '';
    library.forEach((book, index) => {
      const bookContainer = document.createElement('div');
      bookContainer.id = `book-${index}`;
      bookContainer.innerHTML = `
                <ul id="book-items">
                    <li>${book.title}</li>
                    <li>${book.author}</li>
                    <button type="button" id="remove-book">REMOVE</button>
                </ul>
            `;
      libraryContainer.appendChild(bookContainer);

      const removeButton = bookContainer.querySelector('#remove-book');
      removeButton.addEventListener('click', () => {
        library.splice(index, 1);
        // eslint-disable-next-line no-use-before-define
        saveLibrary();
        renderLibrary();
      });
    });
  };

  const data = localStorage.getItem('library');
  if (data !== null) {
    library = JSON.parse(data);
    renderLibrary();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const book = {
      title: title.value,
      author: author.value,
    };

    library.push(book);
    // eslint-disable-next-line no-use-before-define
    saveLibrary();
    renderLibrary();
  });

  const saveLibrary = () => {
    localStorage.setItem('library', JSON.stringify(library));
  };
};

manageBooks();
