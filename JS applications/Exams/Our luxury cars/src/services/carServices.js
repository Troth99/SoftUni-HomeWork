import { del, get, post, put } from "../api/requester.js";
import { allCarsUrl, carUrl } from "../constants/constants.js";
import { page } from "../constants/lib.js";

export async function getAllCars() {
    const data = await get(allCarsUrl)
    return data
}

export async function getCarByID(id) {
    const data = await get(`${carUrl}/${id}`)
    return data
}


export async function carCreateHandler(event) {
    event.preventDefault()
    const carFormData = new FormData(event.currentTarget);

    const model = carFormData.get('model').trim();
    const imageUrl = carFormData.get('imageUrl').trim();
    const price = carFormData.get('price').trim();
    const weight = carFormData.get('weight').trim();
    const speed = carFormData.get('speed').trim();
    const about = carFormData.get('about').trim();

    const inputs = [
        model,
        imageUrl,
        price,
        weight,
        speed,
        about
    ]

    const areEmpty = inputs.some(val => val === '')

    if (areEmpty) {
        return alert('Please fill all fields!')
    }

    const body = {
        model,
        imageUrl,
        price,
        weight,
        speed,
        about
    }

    await createCarRequest(body)
}

async function createCarRequest(body) {
    const data = await post(carUrl, body)
    page.redirect('/dashboard')
}

export async function editHandler(event, id) {
    event.preventDefault()
    const carFormData = new FormData(event.currentTarget);

    const model = carFormData.get('model').trim();
    const imageUrl = carFormData.get('imageUrl').trim();
    const price = carFormData.get('price').trim();
    const weight = carFormData.get('weight').trim();
    const speed = carFormData.get('speed').trim();
    const about = carFormData.get('about').trim();

    const inputs = [
        model,
        imageUrl,
        price,
        weight,
        speed,
        about
    ]

    const areEmpty = inputs.some(val => val === '')

    if (areEmpty) {
        return alert('Please fill all fields!')
    }

    const body = {
        model,
        imageUrl,
        price,
        weight,
        speed,
        about
    }

    await editRequest(body, id)
}

async function editRequest(body, id) {
    const data = await put(`${carUrl}/${id}`, body)
    page.redirect(`/details/${id}`)
    return data
}

export async function deleteCar(e, id) {

    const confrimed = confirm('Are you sure you want to delete this post ?')

    if (!confrimed) {
        return
    }

    await del(`${carUrl}/${id}`)
    page.redirect('/dashboard')
}

export async function searchCar(query) {
    const result = get(`http://localhost:3030/data/cars?where=model%20LIKE%20%22${query}%22`)
    return result
}