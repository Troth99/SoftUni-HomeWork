import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { getToken } from "../utils.js"
import page from "../../node_modules/page/page.mjs"
const baseUrl = 'http://localhost:3030/data/catalog'
const mainEl = document.querySelector('main')

export default async function showEditPage(ctx){
    const furnitureId = ctx.params.id
    const furniture = await getDetails(furnitureId)
    render(editTempalte(furniture, furnitureId), mainEl)
}

async function getDetails(furnitureId){
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
function editTempalte(furniture, furnitureId){
    console.log(furnitureId)
    return html `
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${(e) => editInfo(e, furnitureId)}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control" id="new-make" type="text" name="make" value="${furniture.make}">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control is-valid" id="new-model" type="text" name="model" value="${furniture.model}">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control is-invalid" id="new-year" type="number" name="year" value="${furniture.year}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description" value="${furniture.description}">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price" value="${furniture.price}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img" value="${furniture.img}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" value="${furniture.material}">
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>
</div>
    `
}

async function editInfo(e, furnitureId){
    e.preventDefault()
    const formEditData = new FormData(e.currentTarget);
    const furnitureData = Object.fromEntries(formEditData)

    const areEmptyValues = Object.values(furnitureData).some(val => val === '')
    if(areEmptyValues){
        alert('Invalid data!')
        return
    }
    try {
        const response = await fetch(`${baseUrl}/${furnitureId}`, {
            method: 'PUT',
            headers: {
                'X-Authorization': getToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(furnitureData)
        })

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        console.log(data)
        page.redirect(`/details/${furnitureId}`)
     
    } catch (error) {
        alert(error.message)
    }
}