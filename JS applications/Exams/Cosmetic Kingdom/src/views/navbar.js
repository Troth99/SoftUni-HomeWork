import { render, html } from "../../node_modules/lit-html/lit-html.js"
import { getToken } from "../utis.js"


const headerEl = document.querySelector('header')

export function navBarViews(ctx, next) {
    const isLoggedIn = getToken()
    render(navBarTemplate(isLoggedIn), headerEl)

    next()
}

function loggedInTemplate() {
    return html`
     <div class="user">
            <a href="/create">Add Product</a>
            <a href="/logout">Logout</a>
          </div>
`
}

function guestTemplate() {
    return html`
           <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
    
    `
}
function navBarTemplate(isLoggedIn) {
    return html`
   
     <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>
        <nav>
          <div>
            <a href="/products">Products</a>
          </div>
          ${isLoggedIn ? loggedInTemplate() : guestTemplate()}
        </nav>
`
}