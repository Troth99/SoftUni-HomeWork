import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { getToken } from "../utils.js"
import page from "../../node_modules/page/page.mjs"

const bareUrl = 'http://localhost:3030/data/catalog'
const mainEl = document.querySelector('main')

export default function createPageView() {
    render(createTemplate(), mainEl )
}

async function createFurniture(e){
    e.preventDefault()
    const allInputs = Array.from(document.querySelectorAll('.form-control'))
    let areErrors = false;

    allInputs.forEach(singleInput => {
        const isValid = validationInput(singleInput)

        if(!isValid){
            areErrors = true
        }
    })

    if(areErrors){
        alert('Invalid data!')
        return
    }
    const newFormCreateFurniture = new FormData(e.currentTarget);
    const inputs = Object.fromEntries(newFormCreateFurniture);
    
    try {
        const response = await fetch(`${bareUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                "X-Authorization": getToken()
            },
            body: JSON.stringify(inputs)
        })


        if(!response.ok){
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        console.log(data)
        page.redirect('/')
    } catch (error) {
        throw new Error(error.message)
    }
    console.log(inputs)

}

function validationInput(inputEL){
    const value = inputEL.value.trim();
    const inputELName = inputEL.name;
    let isValid = true

        switch (inputELName) {
            case 'make':
            case 'model':
                isValid = value.length >= 4; 
                break;
            case 'year':
                isValid = value >= 1950 && value <= 2050;
                break;
            case 'description':
                isValid = value.length > 10;
                break;
            case 'price':
                isValid = value > 0;
                break;
            case 'img':
                isValid = value.length > 0;
                break;
        }

        if (isValid){
            inputEL.classList.add('is-valid')
            inputEL.classList.remove('is-invalid')
        }else {
            inputEL.classList.add('is-invalid')
            inputEL.classList.remove('is-valid')
        }

        return isValid
}


function createTemplate(){
    return html `
    <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${createFurniture}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control valid" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control is-valid" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control is-invalid" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>
</div>
    `
}
