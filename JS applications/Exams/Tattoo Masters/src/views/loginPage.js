import {html, render} from "../../node_modules/lit-html/lit-html.js"
import page from "../../node_modules/page/page.mjs"
import { navigatorBar } from "../app.js"
import { baseUrl } from "../utils.js"
const mainEl = document.querySelector('main')

export default function showLoginPage(){

    render(loginTemplate(), mainEl)
}


async function logInUser(e){
    e.preventDefault()
   const loginForm = new FormData(e.currentTarget);
   const dataInputs = Object.fromEntries(loginForm);

   const areEmptyValues = Object.values(dataInputs).some(val => val === '')
   if(areEmptyValues){
       alert('Invalid data!')
       return
   }
   try {
        const response = await fetch(`${baseUrl}/users/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataInputs)
        })

        if(!response.ok){
            let error = await response.json()
            throw new Error(error.message)
        }

        const data = await response.json()
        
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('email', data.email);
        localStorage.setItem('userId', data._id)
        navigatorBar()
        page.redirect('/')
   } catch (error) {
        window.alert(error.message)
   }

}
function loginTemplate(){
    return html `
    <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit="${logInUser}">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
    `
}