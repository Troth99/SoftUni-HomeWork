import { html, render } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { mainEl } from "../constants.js"
import { handleEditFruit } from "./services/fruits.js"




export default function showEditView(ctx) {
    const fruitId = ctx.fruit._id
    const fruit = ctx.fruit
    console.log(fruit)
    render(editTempalte(fruit, fruitId), mainEl)
}

function editTempalte(fruit, fruitId) {

    return html`
      <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form" @submit=${(e) => handleEditFruit(e, fruitId)}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                value=${fruit.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                value=${fruit.imageUrl}
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              > ${fruit.description}</textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
              >${fruit.nutrition}</textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>

    `
}
