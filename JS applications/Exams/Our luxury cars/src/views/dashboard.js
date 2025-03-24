import { mainEl } from "../constants/constants.js";
import { page, render, html } from "../constants/lib.js";
import { getAllCars } from "../services/carServices.js";


export default async function dashaboardView() {
    const allCars = await getAllCars()
    render(dhashBoardTempalte(allCars), mainEl)

}

function carTemplate(car) {

    return html`
          <div class="car">
            <img src="${car.imageUrl}" alt="example1" />
            <h3 class="model">${car.model}</h3>
            <div class="specs">
              <p class="price">Price: €${car.price}</p>
              <p class="weight">Weight: ${car.weight} kg</p>
              <p class="top-speed">Top Speed: ${car.speed} kph</p>
            </div>
            <a class="details-btn" href="/details/${car._id}">More Info</a>
          </div>
    `
}
function dhashBoardTempalte(allCars) {
    return html`
        <h3 class="heading">Our Cars</h3>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
        ${allCars.length > 0 ? allCars.map(car => carTemplate(car))

            : html`<h3 class="nothing">Nothing to see yet</h3>`
        }
        </section>
      
    `
}