import { getUserId } from "../api/utils.js";
import { mainEl } from "../libs/constants.js";
import { render, html, page } from "../libs/lit-html.js";
import { loginHandler } from "../services/authUsers.js";
import { deleteBike, getMotorcycleById, motorCycleHandler } from "../services/motorCyles.js";

export default async function showDetailsView(ctx) {
    const id = ctx.params.id
    const userId = getUserId()
    const bike = await getMotorcycleById(id)
    const isOwner = userId === bike._ownerId

    render(detailsTemplate(bike, isOwner), mainEl)
}


function detailsTemplate(bike, isOwner) {
    console.log(bike)
    return html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${bike.imageUrl}" alt="example1" />
            <p id="details-title">${bike.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${bike.year}</p>
                <p class="mileage">Mileage: ${bike.mileage}</p>
                <p class="contact">Contact Number: ${bike.contact}</p>
                   <p id = "motorcycle-description">
                   ${bike.about}
                        </p>
              </div>
          ${isOwner ? html `  
            <div id="action-buttons">
            <a href="/edit/${bike._id}" id="edit-btn">Edit</a>
            <a id="delete-btn" @click=${(e) =>deleteBike(e, bike._id)}>Delete</a>
          </div>
          ` : ``}
        
            </div>
        </div>
      </section>
    `
}