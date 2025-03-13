
import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { getToken, getUserId } from "../utils.js"
import page from "../../node_modules/page/page.mjs"
const baseUrl = 'http://localhost:3030/data/catalog'
const mainEl = document.querySelector('main')

export default async function myFurnitureShowPage(ctx){
    const furnitureId = ctx.params.id
    const userId = getUserId()
    const myFurnitures = await getUserFurnitures(userId)
    render(myFurnitureTemplate(myFurnitures), mainEl)
}

async function getUserFurnitures(userId){
    try {
        const response = await fetch(`${baseUrl}?where=_ownerId%3D%22${userId}%22`)

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

function myFurnitureTemplate(myFurnitures){
    return html `
    <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
       ${myFurnitures.map(item => singleItemTemplate(item))}
       
    </div>
</div> 
    `
}

function singleItemTemplate(item){
    console.log(item)
return html `
  <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                        <img src="${item.img}" />
                        <p>${item.description}</p>
                        <footer>
                            <p>Price: <span>${item.price} $</span></p>
                        </footer>
                        <div>
                            <a href="/details/${item._id}" class="btn btn-info">Details</a>
                        </div>
                </div>
            </div>
        </div>
`

}