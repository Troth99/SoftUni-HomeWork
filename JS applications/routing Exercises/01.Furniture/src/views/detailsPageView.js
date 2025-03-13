import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { getToken, getUserId } from "../utils.js"
import page from "../../node_modules/page/page.mjs"

const baseUrl = ' http://localhost:3030/data/catalog'
const mainEl = document.querySelector('main')


export default async function showDetailsPage(ctx) {
    const furnitureId = ctx.params.id
    const furnitureItem = await getFurnitureId(furnitureId)
    const userId = getUserId()
 
    const isOwner = userId === furnitureItem._ownerId
 
    render(detailsTemplate(furnitureItem, isOwner), mainEl)
}

async function getFurnitureId(furnitureId) {
    try {
        const response = await fetch(`${baseUrl}/${furnitureId}`)

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        alert(error.message)
    }
}


function detailsTemplate(item, isOwner) {
    return html`
    <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${item.img}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${item.make}</span></p>
            <p>Model: <span>${item.model}</span></p>
            <p>Year: <span>${item.year}</span></p>
            <p>Description: <span>${item.description}</span></p>
            <p>Price: <span>${item.price}</span></p>
            <p>Material: <span>${item.material}</span></p>
            ${isOwner ? html `
                <div>
                <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
                <a class="btn btn-red" id = ${item._id} @click=${deleteFurniture}>Delete</a>
            </div>
            `: '' }
           
        </div>
    </div>
</div>
    `
}

async function deleteFurniture(e){
    const itemId = e.target.id
    
    const confirmed = confirm("Are you sure you want to delete this item?");
    if (!confirmed) {
        return; 
    }
    try {
        const response = await fetch(`${baseUrl}/${itemId}`, {
            method: 'DELETE',
            headers: {
                'X-Authorization': getToken()
            }
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        page.redirect('/');
    } catch (error) {
        alert(error.message);
    }
}