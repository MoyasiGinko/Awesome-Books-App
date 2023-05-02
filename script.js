// GENERATE MAIN SECTION
const root = document.querySelector("#main");

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

// STORE BOOKS
const library = [];

// ADD BOOK
const addBook = () => {
    const form = document.querySelector('form');

    // STORE DATA
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const { title, author } = form.elements;
        const book = {
            title: title.value,
            author: author.value
        };
        
        library.push(book);

        // CREATE BOOK USING DOM
        const libraryContainer = document.getElementById("library-container");
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
        });

        // ADD REMOVE BUTTON FUNCTIONALITY
        const removeButtons = document.querySelectorAll('#remove-book');
        removeButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                library.splice(index, 1);
                const bookContainer = document.getElementById(`book-${index}`);
                bookContainer.remove();
            });
        });
    });
};

addBook();
