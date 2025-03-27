import { mainEL } from '../constants/constants.js';
import { render, html } from '../lib/lib.js';
import { getAllPets } from '../services/petServices.js';

export default async function dashbaordView() {
    const pets = await getAllPets()
    render(dashboardTempalte(pets), mainEL)
}

function dashboardTempalte(pets) {
    return html`
    
    <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">

            ${pets.length > 0 ? pets.map(p => petTemplate(p))
            : html`
                 <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>
                `
        }
               
            </div>
        </section>
    `
}

function petTemplate(pet) {
    return html`
     <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src="${pet.image}">
             </article>
            <h2 class="name">${pet.name}</h2>
        <h3 class="breed">${pet.breed}</h3>
            <div class="action">
            <a class="btn" href="/details/${pet._id}">Details</a>
        </div>
    </div>
    `
}