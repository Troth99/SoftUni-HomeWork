import { mainEl } from "../constants/constants.js";
import { render, html } from "../constants/lib.js";
import { editHandler, getStampById } from "../services/collectionData.js";



export default async function showEditView(ctx) {

    const stampId = ctx.params.id
    const stamp = await getStampById(stampId)
    render(editTemplate(stamp), mainEl)
}

function editTemplate(stamp) {
    return html`
      <section id="edit">
        <div class="form">
          <h2>Edit Post Stamp</h2>
          <form class="edit-form" @submit=${(e) => editHandler(e, stamp._id)}>
            <input type="text" name="name-input" id="name" placeholder="Stamp Name" value=${stamp.name} />
            <input type="text" name="image-url-input" id="image-url" placeholder="Image URL"  value = ${stamp.imageUrl}/>
            <input type="number" id="year-input" name="year-input" placeholder="Year" value=${stamp.year} />
            <textarea id="more-info" name="more-info-textarea" placeholder="More Info" rows="8" cols="10">${stamp.learnMore}</textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
    `
}