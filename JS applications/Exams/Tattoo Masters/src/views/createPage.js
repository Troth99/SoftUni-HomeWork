import {html, render} from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { baseUrl, getToken } from "../utils.js"
const mainEl = document.querySelector('main')

export default function showCreatePage(){
    render(createTemplate(), mainEl)
}

async function addTattoo(e){
    e?.preventDefault()
    const tattooForm = new FormData(e.currentTarget);
    const formInputs = Object.fromEntries(tattooForm);

    const areEmpties = Object.values(formInputs).some(val => val === '')

    if(areEmpties){
        alert('Fill all inputs!')
        return
    }

    try {
        const response = await fetch(`${baseUrl}/data/tattoos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-Authorization": getToken()
            },
            body: JSON.stringify(formInputs)
        })
        if(!response.ok){
            let error = await response.json()
            throw new Error(error.message)
        }
        page.redirect('/collection')
    } catch (error) {
        alert(error.message)
    }
   
}
function createTemplate(){
    return html `
   <section id="create">
    <div class="form">
      <h2>Add tattoo</h2>
      <form class="create-form" @submit="${addTattoo}">
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Tattoo Type"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
        ></textarea>
        <select id="user-type" name="user-type">
          <option value="" disabled selected>Select your role</option>
          <option value="Tattoo Artist">Tattoo Artist</option>
          <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
          <option value="First Time in Tattoo">
            First Time in Tattoo
          </option>
          <option value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Add tattoo</button>
      </form>
    </div>
  </section>
    `
}