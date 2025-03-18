
import { html, render } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { mainEl } from "../constants.js"
import { getUserId } from "../utils.js"
import { deleteFruitHandler } from "./services/fruits.js"




export default function showDetailsView(ctx) {

    const fruit = ctx.fruit
    const userId = getUserId()
    
    const isOwner = ctx.fruit._ownerId === userId

    render(detailsTemplate(fruit, isOwner), mainEl)
}

function detailsTemplate(fruit, isOwner) {

    return html`
 <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
            <p id="details-title">${fruit.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${fruit.description}</p>
                <p id = "nutrition">Nutrition</p>
                <p id = "details-nutrition">
                      ${fruit.nutrition}
                      </p>
                      
              </div>
              <div id="action-buttons">
    ${isOwner ? html` 
            <a href=${`/edit/${fruit._id}`} id="edit-btn">Edit</a>
            <a href="" id="delete-btn" @click=${(e)=> deleteFruitHandler(e,id)}>Delete</a>` : ''}
      
          </div>
            </div>
        </div>
      </section>
    `
}