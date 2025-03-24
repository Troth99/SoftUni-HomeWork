import { mainEl } from "../constants/constants.js";
import { page, render, html } from "../constants/lib.js";
import { deleteCar, getCarByID } from "../services/carServices.js";
import { getUserId } from "../utils/utils.js";


export default async function showDetailsView(ctx) {
    const carId = ctx.params.id
    const userId = getUserId()
    const car = await getCarByID(carId)
    const isOwner = userId === car._ownerId
    render(carDetailsTemplate(car, isOwner), mainEl)

}


function carDetailsTemplate(car, isOwner) {
    return html`
     <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${car.imageUrl}" alt="example1" />
            <p id="details-title">${car.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">Price: €${car.price}</p>
                <p class="weight">Weight: ${car.weight} kg</p>
                <p class="top-speed">Top Speed: ${car.speed} kph</p>
                <p id="car-description">
                ${car.about}</p>
              </div>
              ${isOwner ? html` 
                 <div id="action-buttons">
                <a href="/edit/${car._id}" id="edit-btn">Edit</a>
                <a id="delete-btn" @click =${(e) => deleteCar(e, car._id)}>Delete</a>
              </div>`: ``} 
           
            </div>
          </div>
        </section>
    `
}