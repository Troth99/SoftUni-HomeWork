const url = 'http://localhost:3030/jsonstore/collections/books'

const loadBtn = document.getElementById('loadBooks');
const submitBtn = document.querySelector("form button")

const titleNameEL = document.querySelector('input[name="title"]');
const authorEl = document.querySelector('input[name="author"]');
const formEl = document.querySelector('form h3')
const tbodyEl = document.querySelector('body table tbody')

loadBtn.addEventListener('click', loadBooks)
let editingId = null
async function loadBooks(e) {

    try {
        tbodyEl.innerHTML = ''

        const response = await fetch(url)
        const data = await response.json()
        // const dataValues = Object.values(data) maybe needed

        const entries = Object.entries(data)

        for (const element of entries) {
            const id = element[0];
            const author = element[1].author
            const title = element[1].title
            const trEl = document.createElement('tr')
            const tdEl = document.createElement('td')
            const editBtn = document.createElement('button');
            const deleteBtn = document.createElement('button')
            editBtn.textContent = 'Edit'
            deleteBtn.textContent = 'Delete'
            trEl.innerHTML = `
                    <td>${title}</td>
                    <td>${author}</td>
            
            `

            tdEl.appendChild(editBtn)
            tdEl.appendChild(deleteBtn)
            trEl.appendChild(tdEl)
            tbodyEl.appendChild(trEl)

            editBtn.addEventListener('click', (e) => editInfo(e, id, title, author))
            deleteBtn.addEventListener('click', (e) => deletingBook(e, id))
        }


    } catch (error) {
        console.log('Error')
    }

}

async function deletingBook(e, id){
    try {
        const response = await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
        const data = await response.json()
       e.target.parentElement.parentElement.remove()

    } catch (error) {
        console.log('Error')
    }
}
async function editInfo(e, id, title, author) {
    e.preventDefault();
    editingId = id;
    titleNameEL.value = title;
    authorEl.value = author;
    submitBtn.textContent = "Save";
    loadBooks()
}

submitBtn.addEventListener('click', createBook);

async function createBook(e) {
    e.preventDefault();

    const title = titleNameEL.value;
    const author = authorEl.value;

    const inputs = [
        title,
        author
    ]

    if (inputs.some(input => input === '')) {
        console.log('inputs cannot be empty')
        return
    }

    let response;
    let data;

    if (editingId) {

        response = await fetch(`${url}/${editingId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ author, title })
        });

        console.log("Book updated:", editingId);
    } else {

        response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ author, title })
        });


    }
    data = await response.json();
    titleNameEL.value = "";
    authorEl.value = "";
    submitBtn.textContent = "Submit";
    editingId = null;
    loadBooks()
}
