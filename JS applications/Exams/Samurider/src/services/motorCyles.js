import { baseMorotcycleUrl, motorcycleUrl } from "../libs/constants.js";
import { del, get, post, put } from "../api/requester.js";
import { page } from "../libs/lit-html.js";

export async function getAllMotorcycles() {

    const result = await get(motorcycleUrl)
    return result
}
export async function getMotorcycleById(id){
   
  
    const result = await get(`${baseMorotcycleUrl}/${id}`)
    return result
}


export async function motorCycleHandler(e) {
    e.preventDefault()

    const bikeForm = new FormData(e.currentTarget)
    const imageUrl = bikeForm.get('imageUrl')
    const model = bikeForm.get('model')
    const year = bikeForm.get('year')
    const contact = bikeForm.get('contact')
    const mileage = bikeForm.get('mileage')
    const about = bikeForm.get('about')
    const inputs = [
        imageUrl,
        model,
        year,
        contact,
        mileage,
        about,
    ]
    const empty = inputs.some(v => v === '')
    if (empty) {
        return alert('Please fill all fields!')
    }

    const body = {
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about
    }
    const result = await post(baseMorotcycleUrl, body)
    console.log(result)
    page.redirect('/dashboard')


}

export async function editHandler(e, bikeId) {
    e.preventDefault()

    const bikeForm = new FormData(e.currentTarget)
    const imageUrl = bikeForm.get('imageUrl')
    const model = bikeForm.get('model')
    const year = bikeForm.get('year')
    const contact = bikeForm.get('contact')
    const mileage = bikeForm.get('mileage')
    const about = bikeForm.get('about')
    const inputs = [
        imageUrl,
        model,
        year,
        contact,
        mileage,
        about,
    ]
    const empty = inputs.some(v => v === '')
    if (empty) {
        return alert('Please fill all fields!')
    }

    const body = {
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about
    }
    const result = await put(`${baseMorotcycleUrl}/${bikeId}`, body)
    page.redirect(`/details/${bikeId}`)
    
}

export async function deleteBike(e, bikeId){

    const confirmed = confirm('Are you sure you want to delete this post ??')
    
    if(!confirmed){
        return
    }
   await del(`${baseMorotcycleUrl}/${bikeId}`)
   page.redirect(`/dashboard`)
}

export async function searchBikes(query) {
  
    const result = get(`${baseMorotcycleUrl}?where=model%20LIKE%20%22${query}%22`)
    return result
}


