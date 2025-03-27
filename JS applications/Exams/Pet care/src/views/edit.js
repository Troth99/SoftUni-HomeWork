import { mainEL } from '../constants/constants.js';
import { render, html } from '../lib/lib.js';
import { editHandler, getPetById } from '../services/petServices.js';

export default async function editView(ctx){
    const petId = ctx.params.id
   
    const pet = await getPetById(petId)
    console.log(pet)
    render(editTemplate(pet), mainEL)
}

function editTemplate(pet){
    return html `
    
    <section id="editPage">
            <form class="editForm" @submit=${(e) => editHandler(e, pet._id)}>
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value="${pet.name}">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value="${pet.breed}">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value="${pet.age}">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value="${pet.weight}">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value="${pet.image}">
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
    `
}