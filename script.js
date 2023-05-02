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
    const addBookBtn = document.getElementById("add-book");

  // STORE DATA
  const { title, author } = form.elements;

    const storeData = (obj) => {
        form.addEventListener('input', () => {
            obj = {
                title: title.value,
                author: author.value
            }
            library.push(obj);
        })
    }

  // STORE BOOK TO LIBRARY
  addBookBtn.addEventListener("click", storeData);
};

addBook();