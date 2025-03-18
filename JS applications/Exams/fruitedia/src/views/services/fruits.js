import { catalogUrl, createUrl, detailsUrl } from "../../constants.js"
import page from "../../../node_modules/page/page.mjs"
import { getToken } from "../../utils.js"




export async function getAllFruits(ctx, next) {

    try {
        const response = await fetch(catalogUrl)
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        ctx.fruits = data
        next()
    } catch (error) {
        alert(error.message)
    }
}

export async function getSingleFruit(ctx, next) {
    const id = ctx.params.id

    try {
        const response = await fetch(`${detailsUrl}/${id}`)

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
 
        ctx.fruit = data
        console.log(ctx)
        next()

    } catch (error) {
        alert(error.message)
    }
}
export async function createFormHandler(e) {
    e.preventDefault()

    const createForm = new FormData(e.currentTarget);
    const name = createForm.get('name').trim();
    const imageUrl = createForm.get('imageUrl').trim();
    const description = createForm.get('description').trim();
    const nutrition = createForm.get('nutrition').trim();

    if (!name || !imageUrl || !description || !nutrition) {
        alert('Fill all the inputs !')
        return
    }

    const body = {
        name,
        imageUrl,
        description,
        nutrition,
    }
    await createPostReuqester(body)
    page.redirect('/dashboard')

}

async function createPostReuqester(body) {
    try {
        const response = await fetch(createUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()

    } catch (error) {
        alert(error.message)
    }
}

export async function handleEditFruit(e, fruitId) {
    e.preventDefault()

    const createForm = new FormData(e.currentTarget);
    const name = createForm.get('name').trim();
    const imageUrl = createForm.get('imageUrl').trim();
    const description = createForm.get('description').trim();
    const nutrition = createForm.get('nutrition').trim();

    if (!name || !imageUrl || !description || !nutrition) {
        alert('Fill all the inputs !')
        return
    }

    const body = {
        name,
        imageUrl,
        description,
        nutrition,
    }
    console.log(fruitId)
    await editRequester(body, fruitId)
    page.redirect(`/details/${fruitId}`)

}
async function editRequester(body, fruitId) {
    try {
        const response = await fetch(`${detailsUrl}/${fruitId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()

    } catch (error) {
        alert(error.message)
    }
}

export async function deleteFruitHandler(e, id) {
    e?.preventDefault()

    const confirmed = confirm('Are you sure you want to delete this post ??')
    
    if(!confirmed){
        return
    }
    try {
        await fetch(`${detailsUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'X-Authorization': getToken()
            },
        })
        page.redirect('/dashboard')
    } catch (error) {
        alert(error.message)
    }
}

export async function searchFruits(query) {
    try {
        const response = await fetch(`http://localhost:3030/data/fruits?where=name%20LIKE%20%22${query}%22`);

        if (!response.ok) {
            throw new Error("Failed to fetch search results.");
        }

        return await response.json();
    } catch (error) {
        alert(error.message);
        return [];
    }
}