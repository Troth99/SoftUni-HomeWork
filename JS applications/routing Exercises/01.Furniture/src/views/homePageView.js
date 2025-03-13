import {html, render} from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
const baseUrl = 'http://localhost:3030/data/catalog'
const mainEl = document.querySelector('main')

export default async function homePageView(){
    const furniture = await getAllFurnitures()
    render(createHomeTempalte(furniture), mainEl)
}

async function getAllFurnitures(){
    try {
            const response = await fetch(baseUrl)
        if(!response.ok){
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}

function createHomeTempalte(furniture){
    return html `
    <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${furniture.map(item => singleTemplateCreate(item))}
    </div>
</div>
    `
}

function singleTemplateCreate(item){
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