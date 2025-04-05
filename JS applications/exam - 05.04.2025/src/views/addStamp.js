import { mainEl } from "../constants/constants.js";
import { render, html } from "../constants/lib.js";
import { createStampHandler } from "../services/collectionData.js";



export default function showAddStampView() {

    render(addStampTemplate(), mainEl)
}

function addStampTemplate() {
    return html`
      <section id="create">
        <div class="form">
          <h2>Add Post Stamp</h2>
          <form class="create-form" @submit=${createStampHandler}>
            <input type="text" name="name-input" id="name-input" placeholder="Stamp Name" />
            <input type="text" name="image-url-input" id="image-url-input" placeholder="Image URL" />
            <input type="number" id="year-input" name="year-input" placeholder="year" />
            <textarea id="more-info-textarea" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
            <button type="submit">Add Stamp</button>
          </form>
        </div>
      </section>
    `
}