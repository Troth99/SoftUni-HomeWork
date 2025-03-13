import { render, html } from "../node_modules/lit-html/lit-html.js"

const mainEl = document.getElementById('root');

const submitBtn = document.getElementById('btnLoadTowns')
submitBtn.addEventListener('click', getTheInputData)
const towns = []

function getTheInputData(e) {
    e.preventDefault()
    const input = document.getElementById('towns').value
    const towns = input.split(', ')
    console.log(towns)

    render(createTemplate(towns), mainEl)
}

function createTemplate(towns) {
    return html`
        <ul>
            ${towns.map((town) => html`<li>${town}</li>`)}
        </ul>
    `;
}