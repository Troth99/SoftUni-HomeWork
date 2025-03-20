import { mainEl } from "../libs/constants.js";
import { render, html, page } from "../libs/lit-html.js";
import { editHandler, getMotorcycleById } from "../services/motorCyles.js";


export default async function showEditView(ctx) {
  
    const bikeId = ctx.params.id
    const result = await getMotorcycleById(bikeId)
    render(editTemplate(bikeId, result), mainEl)
}


function editTemplate(bikeId, result) {
    return html`
    <section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
              <form class="edit-form" @submit=${(e) => editHandler(e, bikeId)}> 
                <input
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  value=${result.model}
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="moto-image"
                  placeholder="Moto Image"
                  value=${result.imageUrl}
                />
                <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                value=${result.year}
              />
              <input
              type="number"
              name="mileage"
              id="mileage"
              placeholder="mileage"
              value=${result.mileage}
            />
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="contact"
              value=${result.contact}
            />
              <textarea
                id="about"
                name="about"
                placeholder="about"
                rows="10"
                cols="50"
              >${result.about}</textarea>
                <button type="submit">Edit Motorcycle</button>
              </form>
          </div>
        </section>
    `
}