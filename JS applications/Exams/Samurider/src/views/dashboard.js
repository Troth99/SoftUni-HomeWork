import { mainEl } from "../libs/constants.js";
import { render, html, page } from "../libs/lit-html.js";
import { registerHandler } from "../services/authUsers.js";
import { getAllMotorcycles } from "../services/motorCyles.js";

export default async function dashboardView() {
    const motorcyles = await getAllMotorcycles()
    render(dashBoardTemplate(motorcyles), mainEl)
}


function singleTemplate(motor) {

    return html`
       <div class="motorcycle">
            <img src=".${motor.imageUrl}" alt="example1" />
            <h3 class="model">${motor.model}</h3>
            <p class="year">Year: ${motor.year}</p>
            <p class="mileage">Mileage: ${motor.mileage}.</p>
            <p class="contact">Contact Number: ${motor.contact}</p>
            <a class="details-btn" href="/details/${motor._id}">More Info</a>
          </div>
    `
}
function dashBoardTemplate(motorcyles) {

    return html`
     <h2>Available Motorcycles</h2>
        <section id="dashboard">
    
    ${motorcyles.length > 0 ? motorcyles.map(m => singleTemplate(m))
            : html` <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`
        }
          
        </section>
    `
}