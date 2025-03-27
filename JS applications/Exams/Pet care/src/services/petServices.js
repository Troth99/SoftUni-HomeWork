import { del, get, post, put } from "../api/requester.js";
import { baseUrl, endpoints } from "../constants/constants.js";
import { page } from "../lib/lib.js";
import { inputValidation } from "../utils/utils.js";

export async function getAllPets() {
    const pets = await get(endpoints.dashboardUrl)
    return pets
}

export async function getPetById(id) {
    const pet = await get(`${endpoints.petUrl}/${id}`)
    return pet
}

export async function createPetHandler(e) {
    e.preventDefault()
    const inputsValidation = Object.values(inputValidation(e)).some(val => val === '')
    if (inputsValidation) {
        return alert('Please fill all fields!')
    }
    const body = inputValidation(e)

    await createPet(body)
}

async function createPet(body) {
    const data = post(endpoints.createUrl, body)
    page.redirect('/')
}


export async function editHandler(e, id) {
    e.preventDefault()
    const inputsValidation = Object.values(inputValidation(e)).some(val => val === '')
    if (inputsValidation) {
        return alert('Please fill all fields!')
    }
    const body = inputValidation(e)
    const pet = put(`${endpoints.petUrl}/${id}`, body)
    page.redirect(`/details/${id}`)
}

export async function deletePet(e, id) {

    const confrimed = confirm('Are you sure you want to delete this post ?')

    if (!confrimed) {
        return
    }
    await del(`${endpoints.petUrl}/${id}`)
    page.redirect('/')
}

export async function donateHandler(e, petId) {
    e.preventDefault();


    const body = { petId };
    await post(`${baseUrl}/data/donation`, body);


    const updatedDonations = await getAllPetDonation(petId);


    document.querySelector(".donation").textContent = `Donation: ${updatedDonations * 100}$`;
    e.target.style.display = "none";

}



export async function getAllPetDonation(petId) {
    const donation = await get(`${baseUrl}/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
    return donation
}

export async function getDonationFromUser(petId, userId) {
    const data = await get(`${baseUrl}/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
    return data
}

