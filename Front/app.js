import './styles/styles.css';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderBooks();
});

document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    const ui = new UI();
    ui.addNewBook(formData);
    ui.renderMessage('New Book added', 'success', 3000);

});

document.getElementById('books-cards').addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        const badId = e.target.getAttribute('_id');
        const id = badId.replace('"', '');
        const ui = new UI();
        ui.deleteBook(id);
        ui.renderMessage('Book deleted', 'danger', 3000);
    }
    e.preventDefault();
});