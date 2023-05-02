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
        console.log(library);
    });
};

addBook();
