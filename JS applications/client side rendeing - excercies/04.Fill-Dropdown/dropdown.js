import { html, render } from "../node_modules/lit-html/lit-html.js"

const urlGet = 'http://localhost:3030/jsonstore/advanced/dropdown'
const menuEl = document.getElementById('menu');
const formEL = document.querySelector('form');

formEL.addEventListener('submit', (e) => addItem(e))
try {
    const response = await fetch(urlGet);

    if (!response.ok) {
        let error = await response.json()
        throw new Error(error.message)
    }

    const data = await response.json()

    const entries = Object.values(data)
    console.log(entries)
    let renderData = entries.map((entrie) => renderingTemplate(entrie.text, entrie._id));

    render(renderData, menuEl);

} catch (error) {
    throw new Error(error.message)
}

function renderingTemplate(text, id) {

    return html`
        <option value="${id}">${text}</option>
    `
}
async function addItem(e) {
    e.preventDefault()
    const input = document.getElementById('itemText').value
    try {
        const response = await fetch(urlGet, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: input })
        })
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        location.reload()

    } catch (error) {
        throw new Error(error.message)
    }

}
