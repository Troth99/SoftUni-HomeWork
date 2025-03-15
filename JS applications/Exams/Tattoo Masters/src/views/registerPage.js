import {html, render} from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { baseUrl } from "../utils.js"

const mainEl = document.querySelector('main')

export default function showRegisterPage(){
    render(registerTemplate(), mainEl)
}

async function registerUser(e){
    e.preventDefault()

    const registerForm = new FormData(e.currentTarget);
    const registerInputs = Object.fromEntries(registerForm);
    
    const areRegisterEmpty = Object.values(registerInputs).some(val => val === '')
 
    if(areRegisterEmpty){
        alert('Fill all inputs!')
        return
    }
    if (registerInputs.password !== registerInputs["re-password"]) {
        alert("Passwords don't match!");
        return;
    }

    try {
        
        const response = await fetch(`${baseUrl}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInputs)
        })
        if(!response.ok){
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()

        localStorage.setItem('token', data.accessToken)
        localStorage.setItem('userId', data._id);
        localStorage.setItem('email', data.email)

        page.redirect('/')
   
    } catch (error) {
        alert(error.message)
    }
}
function registerTemplate(){
    return html `
    <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit="${registerUser}">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
    `
}
