import { html, render } from "../node_modules/lit-html/lit-html.js"
import { cats } from "./catSeeder.js"

console.log(cats)
const mainEL = document.getElementById('allCats')
const catTemplate = cats.map(cat => createTemplateForCat(cat.id, cat.statusCode, cat.statusMessage, cat.imageLocation))

render(catTemplate, mainEL)


function createTemplateForCat(catId, catStatus, catMsg, catImg) {
    let statusVisibleCode = false
    return html`
    <ul>
         <li>
            <img src="./images/${catImg}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click="${() => handlerClick(catId)}">${statusVisibleCode ? 'Hide status code' : 'Show status code'}</button>
                <div class="status" style="display: none" id="${catId}">
                    <h4>Status Code: ${catStatus}</h4>
                    <p>${catMsg}</p>
                </div>
             </div>
         </li>
    </ul>
    `
}

function handlerClick(catId){
    const statusId = document.getElementById(`${catId}`);
    const isVisible = statusId.style.display === 'block'
    statusId.style.display = isVisible ? "none" : "block"

const buttonElement = document.querySelector('.showBtn');

if(buttonElement){
    buttonElement.textContent = isVisible ? 'SHow status code' : 'Hide status code'
}
  
  
}