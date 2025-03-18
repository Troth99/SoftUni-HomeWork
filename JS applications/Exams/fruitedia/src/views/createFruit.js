import { html, render } from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { mainEl } from "../constants.js"
import { createFormHandler } from "./services/fruits.js"




export default function showCreateVeiw(){
    render(createTemplate(), mainEl)
}

function createTemplate(){
    return html `
        <section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form class="create-form" @submit=${createFormHandler}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>
    `
}
