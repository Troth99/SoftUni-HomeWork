import { getToken } from "../api/utils.js"
import { headerEl } from "../libs/constants.js"
import {html, render} from "../../node_modules/lit-html/lit-html.js"


export default function showNavigation(ctx, next) {
  const token = getToken()
    render(navigationTemplate(token), headerEl)
    next()
}

function loggedInUser() {
    return html`
         <div class="user">
            <a href="/create">Add Motorcycle</a>
            <a href="/logout">Logout</a>
          </div>
    `
}


function loggedOutUser() {
    return html`
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>  
          </div>
          `
}
function navigationTemplate(token) {
    return html`
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>
        <nav>
          <div>
            <a href="/dashboard">Motorcycles</a>
            <a href="/search">Search</a>
          </div>

        
     ${token ? loggedInUser() : loggedOutUser()}

    
        </nav>
    `
}