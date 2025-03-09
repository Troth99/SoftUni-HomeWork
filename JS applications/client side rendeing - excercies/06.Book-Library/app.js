import { html, render } from "../node_modules/lit-html/lit-html.js";

const bodyElement = document.querySelector('body');

// Рендиране на началния шаблон
render(renderTemplate(), bodyElement);

const formEL = document.getElementById('add-form');
formEL.addEventListener('submit', createBook);

// Получаване на всички книги от сървъра
async function getAllBooks() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
    const tbodyEL = document.querySelector('.bookBody');
    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        const dataBooks = await response.json();
        const values = Object.entries(dataBooks);

        const result = values.map(value => renderBooks(value[1].author, value[1].title, value[0]));
        render(result, tbodyEL);
    } catch (error) {
        console.error(error.message);
    }
}

// Създаване на нова книга
async function createBook(e) {
    e.preventDefault();
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const author = formData.get('author');

    if (!title) {
        alert('Title must not be empty!');
    } else if (!author) {
        alert('Author field must be not empty!');
    }

    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, title })
        });
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }
        formEL.reset();
        getAllBooks();
    } catch (error) {
        console.error(error.message);
    }
}

// Редактиране на книга
async function editBook(e) {
    const id = e.currentTarget.parentElement.parentElement.id;
    const editForm = document.querySelector('#edit-form');
    const createForm = document.querySelector('#add-form');

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`);
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        const title = document.querySelector('#edit-form input[name="title"]');
        const author = document.querySelector('#edit-form input[name="author"]');

        title.value = data.title;
        author.value = data.author;

        createForm.style.display = 'none';
        editForm.style.display = 'block';

        // Добавяне на слушател за изпращане на редактиране
        editForm.addEventListener('submit', (e) => putRequestBooks(e, id));
    } catch (error) {
        console.error(error.message);
    }
}

// Рендиране на книгите в таблицата
function renderBooks(bookName, author, id) {
    return html`
    <tr id="${id}">
        <td>${bookName}</td>
        <td>${author}</td>
        <td>
            <button @click="${editBook}">Edit</button>
            <button @click="${deleteBook}">Delete</button>
        </td>
    </tr>
    `;
}

// Шаблон на страницата
function renderTemplate() {
    return html`
    <button id="loadBooks" @click="${getAllBooks}">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody class="bookBody"></tbody>
    </table>

    <form id="add-form" style="display: block">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>

    <form id="edit-form" style="display: none">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
    `;
}

// Изпращане на редактираната книга на сървъра
async function putRequestBooks(e, id) {
    e.preventDefault();

    const editForm = document.querySelector('#edit-form');
    const createForm = document.querySelector('#add-form');
    const titleVal = document.querySelector('#edit-form input[name="title"]').value;
    const authorVal = document.querySelector('#edit-form input[name="author"]').value;

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ author: authorVal, title: titleVal })
        });

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        // Скриване на формата за редактиране и показване на формата за добавяне
        editForm.style.display = 'none';
        createForm.style.display = 'block';

        editForm.reset();
        getAllBooks();
    } catch (error) {
        console.error(error.message);
    }
}

// Изтриване на книга
async function deleteBook(e) {
    const id = e.currentTarget.parentElement.parentElement.id;

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        getAllBooks();
    } catch (error) {
        console.error(error.message);
    }
}
