import { mainEL } from '../constants/constants.js';
import { render, html } from '../lib/lib.js';
import { deletePet, donateHandler, getAllPetDonation, getDonationFromUser, getPetById } from '../services/petServices.js';
import { getToken, getUserId } from '../utils/utils.js';

export default async function detailsView(ctx) {
    let userHasDonated = false;
    const petId = ctx.params.id
    const pet = await getPetById(petId)
    const userId = getUserId()
    const isOwner = userId === pet._ownerId
    const token = getToken()

    if (userId) {

        const donatedUser = await getDonationFromUser(petId, userId)

        userHasDonated = donatedUser > 0
    }

    const donated = await getAllPetDonation(petId)
    const isLoggedIn = userId !== null && userId !== undefined
    render(detailsTemplate(pet, isOwner, token, donated, userHasDonated, isLoggedIn), mainEL)
}

function detailsTemplate(pet, isOwner, token, donated, userHasDonated, isLoggedIn) {
    return html`
    
    <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: ${donated ? donated * 100 : 0}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    <div class="actionBtn">
                     ${isOwner ? html`
                        <!-- Only for registered user and creator of the pets-->
                        <a href="/edit/${pet._id}" class="edit">Edit</a>
                        <a  class="remove" @click=${(e) => deletePet(e, pet._id)}>Delete</a>
                        <!--(Bonus Part) Only for no creator and user-->
                        
                     ` : !userHasDonated && isLoggedIn ? html`<a  class="donate" @click=${(e) => donateHandler(e, pet._id)}>Donate</a>` :
            ''}
                 
                    </div>
                </div>
            </div>
        </section>
    `
}