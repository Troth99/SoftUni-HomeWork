import { mainEl } from "../constants/constants.js";
import { page, render, html } from "../constants/lib.js";
import { editHandler, getCarByID } from "../services/carServices.js";


export default async function showEditView(ctx) {
    const carId = ctx.params.id
    const car = await getCarByID(carId)
    console.log(car)
    render(editTempalte(car), mainEl)

}


function editTempalte(car) {
    return html`
            <section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form class="edit-form" @submit=${(e) => editHandler(e, car._id)}>
              <input type="text" name="model" id="model" placeholder="Model" value ="${car.model}"/>
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
                value = "${car.imageUrl}"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                value= "${car.price}"
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
                value= "${car.weight}"
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
                value= "${car.speed}"
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              >"${car.about}"</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>

    `
}